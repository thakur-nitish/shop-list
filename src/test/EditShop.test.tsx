import {
  screen,
  render as rtlRender,
  fireEvent,
  getByTestId,
} from "@testing-library/react";
import Modal from "react-modal";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../app/store";
import EditShop from "../components/EditShop";
const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe("editShop tests", () => {
  test("heading", () => {
    render(
      <EditShop
        value={{
          nam: "Nit",
          area: "Thane",
          category: "Chemist",
          oDate: "2022-12-09",
          cDate: "2022-12-23",
        }}
      />
    );
    expect(
      screen.getByRole("heading", {
        name: "Edit Shops",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Shop Name",
      })
    ).toBeInTheDocument();
    const shopName = screen.getByRole("textbox", {
      name: "Shop Name",
    });
    fireEvent.change(shopName);
  });

  test("for area options", () => {
    render(
      <EditShop
        value={{
          nam: "abc",
          area: "Thane",
          category: "Chemist",
          oDate: "2022-12-09",
          cDate: "2022-12-23",
        }}
      />
    );
    const selectArea = screen.getByTestId("select-area");
    fireEvent.change(selectArea);
    expect(
      screen.getByRole("option", {
        name: "Open this select Area",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", {
        name: "Thane",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", {
        name: "Pune",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", {
        name: "Mumbai Suburban",
      })
    ).toBeInTheDocument();
  });

  test("Select Category renderes", () => {
    render(
      <EditShop
        value={{
          nam: "abc",
          area: "Thane",
          category: "Chemist",
          oDate: "2022-12-09",
          cDate: "2022-12-23",
        }}
      />
    );
    const selectCategory = screen.getByTestId("select-category");
    fireEvent.change(selectCategory);
    expect(
      screen.getByRole("option", {
        name: "Open this select Category",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", {
        name: "Grocery",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", {
        name: "Butcher",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", {
        name: "Chemist",
      })
    ).toBeInTheDocument();
  });

  test("submit button", () => {
    render(
      <EditShop
        value={{
          nam: "Nitish Thakur",
          area: "Thane",
          category: "Chemist",
          oDate: "2022-12-09",
          cDate: "2022-12-23",
        }}
      />
    );
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
  });
  test("open and closing date", () => {
    render(
      <EditShop
        value={{
          nam: "Nitish Thakur",
          area: "Thane",
          category: "Chemist",
          oDate: "2022-12-09",
          cDate: "2022-12-23",
        }}
      />
    );
    expect(screen.getByTestId("closing-date")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("closing-date"));
    expect(screen.getByTestId("opening-date")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("opening-date"));
  });
  test("Modal Testing", () => {
    const closeModal1 = () => {};
    const funtions = {
      onAfterOpen: () => {},
      onRequestClose: () => {},
    };
    render(
      <EditShop
        value={{
          nam: "Nitish Thakur",
          area: "Thane",
          category: "Chemist",
          oDate: "2022-12-09",
          cDate: "2022-12-23",
        }}
        closeModal={closeModal1}
      />
    );
    render(
      <Modal
        isOpen={true}
        onAfterOpen={funtions.onAfterOpen}
        onRequestClose={funtions.onRequestClose}
        ariaHideApp={false}
        contentLabel="Example Modal"
      />
    );
    fireEvent.click(screen.getByTestId("submit-button"));
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(
      screen.getByText("Shop has been edited successfully!")
    ).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("submit-button"));
    fireEvent.click(
      screen.getByRole("button", {
        name: "close",
      })
    );
    userEvent.type(
      screen.getByRole("textbox", {
        name: "Shop Name",
      }),
      ""
    );
    userEvent.selectOptions(screen.getByTestId("select-category"), "");
    userEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(screen.getByText("Please fill all the fields!")).toBeInTheDocument();
    userEvent.type(screen.getByTestId("opening-date"), "2022-12-09");
    userEvent.selectOptions(screen.getByTestId("select-category"), "Butcher");
    userEvent.selectOptions(screen.getByTestId("select-area"), "Pune");
    expect(screen.getByTestId("opening-date")).toHaveValue("2022-12-09");
    userEvent.type(screen.getByTestId("closing-date"), "2022-12-09");
    expect(screen.getByTestId("closing-date")).toHaveValue("2022-12-09");
    fireEvent.change(
      screen.getByRole("textbox", {
        name: "Shop Name",
      }),
      "Nitish Thakur"
    );
    expect(
      screen.getByRole("textbox", {
        name: "Shop Name",
      })
    ).toHaveValue("Nitish Thakur");
    fireEvent.change(screen.getByTestId("opening-date"), "2022-12-09");
    expect(screen.getByTestId("opening-date")).toHaveValue("2022-12-09");
  });
});

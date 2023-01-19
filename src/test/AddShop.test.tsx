import { screen, render as rtlRender, fireEvent } from "@testing-library/react";
import AddShop from "../components/AddShop";
import Modal from "react-modal";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../app/store";
const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe("AddShops tests", () => {
  test("add shops title", () => {
    render(<AddShop />);
    expect(screen.getByText("Add Shops")).toBeInTheDocument();
  });

  test("shopname input box", () => {
    render(<AddShop />);
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
  test("Select area renders", () => {
    render(<AddShop />);
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
    render(<AddShop />);
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
  test("open and closing date", () => {
    render(<AddShop />);
    expect(screen.getByTestId("closing-date")).toBeInTheDocument();
    expect(screen.getByTestId("opening-date")).toBeInTheDocument();
  });

  test("submit button", () => {
    render(<AddShop />);
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
    const btnSubmit = screen.getByRole("button", {
      name: "Submit",
    });
    fireEvent.click(btnSubmit);
    expect(btnSubmit).toBeInTheDocument();
    const inputBox = screen.getByText("Shop Name");
  });
});

describe("AddShops modal", () => {
  test("hello text renders", () => {
    render(<AddShop />);
    // expect(
    //   screen.getByRole("heading", {
    //     name: "Hello",
    //   })
    // ).toBeInTheDocument();
  });

  test("modal test", () => {
    const funtions = {
      onAfterOpen: () => {},
      onRequestClose: () => {},
    };
    render(<AddShop />);
    render(
      <Modal
        isOpen={true}
        onAfterOpen={funtions.onAfterOpen}
        onRequestClose={funtions.onRequestClose}
        ariaHideApp={false}
        contentLabel="Example Modal"
      />
    );
    userEvent.type(
      screen.getByRole("textbox", {
        name: "Shop Name",
      }),
      ""
    );
    userEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );

    // expect(screen.getByTestId("2nd-modal")).toBeInTheDocument();

    const btnSubmit = screen.getByRole("button", {
      name: "Submit",
    });

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "close",
      })
    ).toBeInTheDocument();
    const btnClose = screen.getByRole("button", {
      name: "close",
    });
    fireEvent.click(btnClose);
  });

  test("onchange shopname", () => {
    render(<AddShop />);
    fireEvent.change(
      screen.getByRole("textbox", {
        name: "Shop Name",
      })
    );
    userEvent.type(
      screen.getByRole("textbox", {
        name: "Shop Name",
      }),
      "Nitish Kumar"
    );
    expect(
      screen.getByRole("textbox", {
        name: "Shop Name",
      })
    ).toHaveValue("Nitish Kumar");
    userEvent.type(screen.getByTestId("opening-date"), "2022-12-09");
    userEvent.selectOptions(screen.getByTestId("select-category"), "Butcher");
    userEvent.selectOptions(screen.getByTestId("select-area"), "Pune");
    expect(screen.getByTestId("opening-date")).toHaveValue("2022-12-09");
    userEvent.type(screen.getByTestId("closing-date"), "2022-12-09");
    expect(screen.getByTestId("closing-date")).toHaveValue("2022-12-09");

    userEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(
      screen.getByText("Shop has been added successfully!")
    ).toBeInTheDocument();
    userEvent.type(
      screen.getByRole("textbox", {
        name: "Shop Name",
      }),
      ""
    );
    userEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(screen.getByText("Please fill all the fields!")).toBeInTheDocument();
    expect(screen.getByText("Please fill all the fields!").style.color).toBe(
      "red"
    );
    expect(screen.getByPlaceholderText("Enter shop name")).toBeInTheDocument();
  });
});

import { screen, render as rtlRender, fireEvent } from "@testing-library/react";
import Modal from "react-modal";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../app/store";
import ViewShop from "../components/ViewShop";
import Select from "react-select/dist/declarations/src/Select";
const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe("viewShop Tests", () => {
  test("shop list", () => {
    render(<ViewShop />);

    expect(screen.getByText("Shop List")).toBeInTheDocument();
  });
  // test("close button", () => {
  //   render(<ViewShop />);
  //   expect(screen.getByText("X")).toBeInTheDocument();
  // });
  // test("for filter", () => {
  //   render(<ViewShop />);
  //   const selectElement = screen.getByDisplayValue("Butcher");
  //   expect(selectElement).toBeInTheDocument();
  // });
  test("card renders", () => {
    render(<ViewShop />);
    expect(screen.getByText("Shop Name: SayaMedico")).toBeInTheDocument();
    expect(screen.getByText("Area : Thane")).toBeInTheDocument();
    expect(screen.getByText("Category : Chemist")).toBeInTheDocument();
    expect(screen.getByText("Opening Date : 2022-12-09")).toBeInTheDocument();
    expect(screen.getByText("Closing Date : 2022-12-23")).toBeInTheDocument();
  });
  test("filter box renders", () => {
    render(<ViewShop />);
    expect(screen.getByTestId("filter")).toBeInTheDocument();
  });
  test("edit & delete button", () => {
    render(<ViewShop />);
    expect(screen.getByTestId("edit-button")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("edit-button"));
    expect(screen.getByTestId("delete-button")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("delete-button"));
  });

  test("edit and delete button functionality", async () => {
    const functions = {
      afterOpenModal: () => {},
      closeModal: () => {},
    };
    render(<ViewShop />);
    render(
      <Modal
        isOpen={true}
        onAfterOpen={functions.afterOpenModal}
        onRequestClose={functions.closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
      />
    );

    const btnEdit = screen.getByTestId("edit-button");
    fireEvent.click(btnEdit);
    expect(btnEdit).toBeInTheDocument();
    expect(screen.getByText("Hello Please edit your form")).toBeInTheDocument();
    expect(screen.getByText("Edit Shops")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
    // expect(screen.getByTestId("edit-button")).toBeInTheDocument();
    const btnDelete = screen.getByTestId("delete-button");
    fireEvent.click(btnDelete);
    expect(
      screen.getByText("Are you sure want to delete the Shop?")
    ).toBeInTheDocument();

    expect(screen.getByTestId("modal-div")).toBeInTheDocument();
  });
  test("modal test", () => {
    const funtions = {
      onAfterOpen: () => {},
      onRequestClose: () => {},
    };
    render(<ViewShop />);
    render(
      <Modal
        isOpen={true}
        onAfterOpen={funtions.onAfterOpen}
        onRequestClose={funtions.onRequestClose}
        ariaHideApp={false}
        contentLabel="Example Modal"
      />
    );
    // expect(screen.getByTestId("2nd-modal")).toBeInTheDocument();
    const btnDelete = screen.getByTestId("delete-button");
    fireEvent.click(btnDelete);
    expect(screen.getByTestId("close-popup-yes")).toBeInTheDocument();
    expect(screen.getByTestId("close-popup")).toBeInTheDocument();
    const btnClose = screen.getByTestId("close-popup");
    fireEvent.click(btnClose);
  });
  // test("select functionality", () => {
  //   const options1 = [
  //     {
  //       label: `Category`,
  //       options: [
  //         {
  //           label: "Butcher",
  //           value: "Category",
  //           color: "red",
  //         },
  //         {
  //           label: "Grocery",
  //           value: "Category",
  //           color: "blue",
  //         },
  //         {
  //           label: "Chemist",
  //           value: "Category",
  //           color: "green",
  //         },
  //       ],
  //     },
  //     {
  //       label: "Area",
  //       options: [
  //         {
  //           label: "Thane",
  //           value: "Area",
  //           color: "brown",
  //         },
  //         {
  //           label: "Pune",
  //           value: "Area",
  //           color: "orange",
  //         },
  //         {
  //           label: "Mumbai Suburban",
  //           value: "Area",
  //           color: "purple",
  //         },
  //       ],
  //     },
  //   ];
  //   const fun = () => {};
  //   render(<ViewShop />);
  //   render(
  //     <Select
  //       placeholder="Filter"
  //       value={{
  //         label: "Area",
  //         options: [
  //           {
  //             label: "Thane",
  //             value: "Area",
  //             color: "brown",
  //           },
  //         ],
  //       }}
  //       onChange={fun}
  //       options={options1}
  //     />
  //   );
  // });

  test("no items to display", () => {
    const functions = {
      afterOpenModal: () => {},
      closeModal: () => {},
    };
    render(<ViewShop />);
    // render(
    //   <Modal
    //     isOpen={true}
    //     onAfterOpen={functions.afterOpenModal}
    //     onRequestClose={functions.closeModal}
    //     ariaHideApp={false}
    //     contentLabel="Example Modal"
    //   />
    // );
    // fireEvent.click(screen.getByTestId("delete-button"));
    // expect(
    //   screen.getByText("Are you sure want to delete the Shop?")
    // ).toBeInTheDocument();

    // expect(
    //   screen.getByRole("button", {
    //     name: /delete/i,
    //   })
    // ).toBeInTheDocument();
  });
  // Modal testing
  test("modal testing for delte", () => {
    const functions = {
      afterOpenModal: () => {},
      closeModal: () => {},
    };
    render(<ViewShop />);
    render(
      <Modal
        isOpen={true}
        onAfterOpen={functions.afterOpenModal}
        onRequestClose={functions.closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
      />
    );

    expect(screen.getByTestId("delete-button")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("delete-button"));
    expect(screen.getByTestId("close-popup-yes")).toBeInTheDocument();
    expect(screen.getByTestId("close-popup")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("close-popup"));
    expect(screen.queryByTestId("noitem")).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId("delete-button"));
    userEvent.click(screen.getByTestId("close-popup-yes"));
    expect(screen.getByTestId("noitem")).toBeInTheDocument();
  });
});

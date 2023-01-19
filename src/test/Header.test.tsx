import { screen, render as rtlRender, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/Header";
const render = (component: any) =>
  rtlRender(<BrowserRouter>{component}</BrowserRouter>);
describe("Header Component", () => {
  test("Shop Name", () => {
    render(<Header />);
    expect(screen.getByText("Google Shop")).toBeInTheDocument();
  });
  test("Are buttons present", () => {
    render(<Header />);
    expect(
      screen.getByRole("button", {
        name: "Add Shop",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "View Shop",
      })
    ).toBeInTheDocument();
  });
  test("button functionality", () => {
    render(<Header />);
    expect(screen.getByText("Add Shop").getAttribute("href")).toBe("/addshop");
    expect(screen.getByText("View Shop").getAttribute("href")).toBe(
      "/viewshop"
    );
  });

  test("should call closeRightSection callback", () => {
    render(<Header />);
    const btnIncrement = screen.getByTestId("add-shop");
    fireEvent.click(btnIncrement);

    expect(screen.getByTestId("add-shop")).toBeInTheDocument();
    const viewshop = screen.getByTestId("view-shop");
    fireEvent.click(viewshop);

    expect(screen.getByTestId("view-shop")).toBeInTheDocument();
  });
});

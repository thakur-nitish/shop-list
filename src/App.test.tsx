import { screen, render as rtlRender } from "@testing-library/react";

import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe("App.tsx tests", () => {
  test("app.tsx renders correctly", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});

import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import AddShop from "./components/AddShop";
import ViewShop from "./components/ViewShop";

// export const AppContext = React.createContext<AppContextInterface[]>([]);
function App() {
  return (
    <div data-testid="app" className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<ViewShop />} />
              <Route path="/addshop" element={<AddShop />} />
              <Route path="/viewshop" element={<ViewShop />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

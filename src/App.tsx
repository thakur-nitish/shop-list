import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import AddShop from "./components/AddShop";
import ViewShop from "./components/ViewShop";
import { type } from "os";
interface AppContextInterface {
  shopName: string;
  area: string;
  category: string;
  oDate: string;
  cDate: string;
}

const sampleAppContext: AppContextInterface[] = [
  {
    shopName: "Thakur",
    area: "thehappybug",
    category: "sjksl",
    oDate: "12-12-2022",
    cDate: "16-12-2022",
  },
];
interface PropType {
  increment: (value: AppContextInterface) => {
    type: string;
    payload: AppContextInterface;
  };
}
export const AppContext = React.createContext<AppContextInterface[]>([]);
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<ViewShop />} />
            <Route path="/addshop" element={<AddShop />} />
            <Route path="/viewshop" element={<ViewShop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

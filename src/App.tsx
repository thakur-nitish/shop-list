import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import AddShop from "./components/AddShop";
import ViewShop from "./components/ViewShop";
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
export const AppContext = React.createContext<AppContextInterface[]>([]);
function App() {
  const [shops, setShops] = React.useState(sampleAppContext);
  return (
    <div className="App">
      <AppContext.Provider value={shops}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<ViewShop />} />
              <Route path="addshop" element={<AddShop fun={setShops} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;

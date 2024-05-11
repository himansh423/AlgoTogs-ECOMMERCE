import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BackImage from "./components/BackImage.jsx";
import TextOnHero from "./components/TextOnHero.jsx";
import HeroCard from "./components/HeroCard.jsx";
import {Provider} from "react-redux";
import eComStore from "./store/index.js";
import ShopSection from "./components/ShopSection.jsx";
import App from "./routes/App.jsx";
import CartSide from "./components/CartSide.jsx";
import HomeLanding from "./parentComponent/HomeLanding.jsx";
import EverythingStore from "./parentComponent/EverythingStore.jsx";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeLanding/>
      },
      {
        path:"/store",
        element:<EverythingStore/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={eComStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

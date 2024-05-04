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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: [<BackImage />,<TextOnHero/>,<HeroCard/>,<ShopSection/>]
      },
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

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import eComStore from "./store/index.js";
import App from "./routes/App.jsx";
import HomeLanding from "./parentComponent/HomeLanding.jsx";
import EverythingStore from "./parentComponent/EverythingStore.jsx";
import MenStore from "./parentComponent/MenStore.jsx";
import WomenStore from "./parentComponent/WomenStore.jsx";
import AccessoriesStore from "./parentComponent/AccessoriesStore.jsx";
import ContactPage from "./parentComponent/ContactPage.jsx";

 
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
      },
      {
        path:"/men",
        element:<MenStore/>
      },
      {
        path:"/women",
        element:<WomenStore/>
      },
      {
        path:"/accessories",
        element:<AccessoriesStore/>
      },
      {
        path:"/contact",
        element:<ContactPage/>
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

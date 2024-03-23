import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Header from "./components/Header";
import App from "./App";
import Body from "./components/Body";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/restaurantmenu/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

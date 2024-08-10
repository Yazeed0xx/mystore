import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Details from "../Pages/Details";
import Cart from "../Pages/Cart";
import PreviousOrders from "../Pages/Previous";
import Datafilter from "../Pages/Datafilter";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/orders",
      element: <PreviousOrders />,
    },
    {
      path: "/Datafilter",
      element: <Datafilter />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;

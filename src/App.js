import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const About = lazy(() => {
  return import("./components/About");
});
// Suppose Grocery is a big compoent, it has 20 more child component -> Use lazy loading to increase performace
const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName("Vishwas Kumar");
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedIn: name, setName }}>
        <div>
          <Header />
          <div className="mt-24 max-w-full border m-auto">
            <Outlet />
          </div>
        </div>
        <ToastContainer />
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

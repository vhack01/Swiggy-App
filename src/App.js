import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import CartContext from "./utils/cartContext";

const About = lazy(() => {
  return import("./components/About");
});
// Suppose Grocery is a big compoent, it has 20 more child component -> Use lazy loading to increase performace
const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  const [name, setName] = useState("");
  const [cartItemsCount, setCartItemCount] = useState(0);
  useEffect(() => {
    setName("Vishwas Kumar");
  }, []);
  return (
    <UserContext.Provider value={{ loggedIn: name, setName }}>
      <CartContext.Provider
        value={{ itemCount: cartItemsCount, setCartItemCount }}
      >
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

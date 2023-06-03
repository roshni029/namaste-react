import React, {lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";

import RestrauntCard from "./components/RestaurantCard";
import { Suspense } from "react";
import Shimmer from "./components/Shimmer";

const InstaMart = lazy(()=> import('./components/InstaMart'))
const About = lazy(()=> import('./components/About'))

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([

  {

    path : "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
      },
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/instamart",
        element: 
        <Suspense fallback={"Loading InstaMart..."}>
        <InstaMart/>
        </Suspense>
      }

    ]
  }

])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from './components/RootLayout';
import ErrorRoute from './pages/ErrorRoute'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import SignOut from './pages/SignOut';
import Error from './pages/Error';
import HomePageContext from './Context/HomePageContext';
import Product from './pages/Product';




function Routing() {
    const router = createBrowserRouter(createRoutesFromElements(

        <Route path="/" element={<RootLayout />} errorElement={<Error />}>
            <Route index element={<HomePageContext><Home /></HomePageContext>} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signout" element={<SignOut />} />
            <Route path="product/:id" element={<Product />} />

            <Route path="*" element={<ErrorRoute />} />
        </Route>
    ));
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Routing
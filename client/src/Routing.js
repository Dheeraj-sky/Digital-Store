import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from './components/RootLayout';
import ErrorRoute from './pages/ErrorRoute'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';




function Routing() {
    const router = createBrowserRouter(createRoutesFromElements(

        <Route path="/" element={<RootLayout />} >
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
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
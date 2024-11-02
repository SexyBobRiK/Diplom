import { createBrowserRouter, Navigate } from "react-router-dom";
import SignUp from "../../components/SignUp";
import Registration from "../../components/Registration";
import NotFound from "../../components/UI/NotFound";
import Home from "../../components/Home"
import ContactList from "../../components/ContactList"
import  Settings  from "../../components/Settings";

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/sign-up" replace /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/registration", element:<Registration /> },
    {path: "/home", element: <Home />, children: [
        { path: "chat", element: <ContactList /> },
        { path: "settings", element: <Settings /> }
    ] },


    { path: '*', element: <NotFound /> }
])

export default router;
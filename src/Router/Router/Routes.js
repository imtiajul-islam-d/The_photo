import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
import Main from "../../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>
    }
])
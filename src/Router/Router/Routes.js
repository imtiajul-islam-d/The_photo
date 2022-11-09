import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home";
import Service from "../../Pages/Service/Service";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path : '/addService',
                element:<PrivetRoute><AddService></AddService></PrivetRoute>
            },
            {
                path: '/services',
                loader:  async () => {
                    return fetch("http://localhost:5000/services");
                  },
                element: <Service></Service>
            },
            {
                element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>,
                path: "/services/:id",
                loader: async ({ params }) => {
                    console.log(params.id)
                  return fetch(`http://localhost:5000/services/${params.id}`);
                },
            }
        ]
    }
])
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
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Blog from "../../Pages/Blog/Blog";


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
                    return fetch("https://personal-review-server.vercel.app/services");
                  },
                element: <Service></Service>
            },
            {
                element: <ServiceDetails></ServiceDetails>,
                path: "/services/:id",
                loader: async ({ params }) => {
                  return fetch(`https://personal-review-server.vercel.app/services/${params.id}`);
                }
            },
            {
                path: '/myReviews',
                element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])
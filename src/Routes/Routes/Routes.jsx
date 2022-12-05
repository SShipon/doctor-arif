import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointments/Appointment/Appointment";
import Blogs from "../../Pages/Blogs/Blogs";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import NotFound from "../../Shared/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
                
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'*',
                element:<NotFound></NotFound>
            }
        ]
        
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homepage/homecomponent/homepage";


const router = createBrowserRouter ([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element: <HomePage/>
            }
        ]

        
    }
])
export default router;
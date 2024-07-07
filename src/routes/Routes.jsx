import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import UploadProduct from "../pages/UploadProduct/UploadProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }, 
            {
                path: "upload_product",
                element: <UploadProduct />
            }
        ]
    }
])

export default router;
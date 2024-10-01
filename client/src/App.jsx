import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomeLayout, Home } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    }
]);

export default function App() {
    return (
        <RouterProvider router={router} /> 
    )
};
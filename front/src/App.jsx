import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./components/Profile.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {


    const router = createBrowserRouter([

        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/dashboard",
            element: <Dashboard/>
        },
        {
            path: "/singlePost",
            element: <Dashboard/>
        },
        {
            path: "/profile",
            element: <Profile/>
        },
        {
            path: "/addPost",
            element: <AddPost/>
        },
    ])

    return <RouterProvider router={router}/>
}

export default App

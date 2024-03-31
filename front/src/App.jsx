import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./pages/Register.jsx";

function App() {

    const Layout = () => {
        return (
            <div className="w-screen h-screen">
                <div className="w-full">
                    <Outlet/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/login",
                    element: <Login/>
                },{
                    path: "/register",
                    element: <Register/>
                },
            ]

        }
    ])

    return <RouterProvider router={router}/>
}

export default App

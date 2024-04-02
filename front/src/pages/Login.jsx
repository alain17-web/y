import {Link,useNavigate} from "react-router-dom"
import Footer from "../components/Footer.jsx";
import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext.jsx";

const Login = () => {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: "",
        pwd:""
    })

    const {token,loading,error,dispatch} = useContext(AuthContext)

    const handleChange = (e) => {
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("http://localhost:3000/api/users/login",credentials)
            const token = res.data.token

            localStorage.setItem("token",token)
            console.log("server response",res.data)
            dispatch({type:"LOGIN_SUCCESS",payload:token})

            navigate("/dashboard")
        } catch(err){
            console.log("login error",err)
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data})

        }
    }

    return (
        <div className="w-full h-[100vh] bg-[#A3A3A3] py-5">
            {error && <span className={"text-red-500 text-xl"}>Incorrect credentials</span>}
            <form className="w-[60%] h-[auto] flex flex-col mx-auto bg-white my-12 rounded-xl gap-8">
                <Link to="/">
                    <img src="./img/y.jpg" alt="y logo" width={"100px"} className="mt-5 ml-[48%] cursor-pointer"/>
                </Link>
                <h1 className=" text-start text-5xl font-inter font-bold mt-4 ml-[10%]">Sign in to Y</h1>
                <button
                    className="flex w-[50%] h-14 mx-auto mt-6 border-2 border-gray-200 justify-center items-center rounded-3xl px-6 cursor-pointer">
                    <img src="./img/google.png" alt="google logo" width="30px" height="30px" className="mr-2"/>
                    <p className="text-xl font-inter font-bold">Sign up with Google</p>
                </button>
                <button
                    className="flex w-[50%] h-14 mx-auto mt-4 border-2 border-gray-200 justify-center items-center rounded-3xl px-6 cursor-pointer">
                    <img src="./img/apple-logo.png" alt="apple logo" width="30px" height="30px"/>
                    <p className="text-xl font-inter font-bold">Sign up with Apple</p>
                </button>

                <p className="text-center text-2xl mt-6">or</p>

                <input
                    className="w-[60%] h-[58px] mx-auto border-2 border-gray-200  px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    required
                    onChange={handleChange}
                />
                <input
                    className="w-[60%] h-[58px] mx-auto border-2 border-gray-200  px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black"
                    type="password"
                    name="pwd"
                    id="pwd"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                />
                <button
                    className="flex w-[50%] h-16 mx-auto mt-12 text-white text-xl font-inter font-bold justify-center items-center rounded-3xl px-6 cursor-pointer bg-black">
                    Sign in
                </button>
                <button
                    className="flex w-[50%] h-14 mx-auto mt-4 border-2 border-gray-200 justify-center items-center rounded-3xl px-6 cursor-pointer"
                    onClick={handleClick}
                >
                    <p className="text-xl font-inter font-bold">Forgot Password</p>
                </button>
                <p className="text-center text-xl font-inter mb-4">Don't have an account? <Link to="/register"
                                                                                                className="text-[#1B8CD8] cursor-pointer">Sign
                    up</Link></p>
            </form>
            <Footer/>
        </div>
    );
};

export default Login
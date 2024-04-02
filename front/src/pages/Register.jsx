import {Link} from "react-router-dom"
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const Register = () => {

    const navigate = useNavigate()

    const [lastName,setLastName] = useState("")
    const [firstName,setFirstName] = useState("")
    const [username,setUsername] = useState("")
    const [pwd,setPwd] = useState("")
    const [success,setSuccess] = useState("")
    const [errorMsg,setErrorMsg] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const userData = {
                lastName: lastName,
                firstName: firstName,
                username: username,
                pwd: pwd
            }
            const res = await axios.post("http://localhost:3000/api/users/register",userData)
            console.log(res.data)
            setSuccess("Sign up successful. You can now sign in")
            setErrorMsg("")
            navigate("/login")
        }catch (err){
            console.log(err)
            setSuccess("")
            setErrorMsg("Failed to sign in. Try again")
        }
    }

    return (
        <div className="w-full h-[100vh] bg-[#A3A3A3] py-5">
            {success && (
                <span className={"text-green-400 text-xl"}>{success}</span>
            )}
            {errorMsg && (
                <span className={"text-red-400 text-xl"}>{errorMsg}</span>
            )}

            <form className="w-[60%] h-[auto] flex flex-col mx-auto bg-white mt-24 mb-44 rounded-xl gap-10"
                  onSubmit={handleSubmit}
            >
                <Link to="/">
                    <img src="./img/y.jpg" alt="y logo" width={"100px"} className="mt-5 ml-[48%] cursor-pointer"/>
                </Link>
                <h1 className=" text-start text-5xl font-inter font-bold mt-8 ml-[10%]">Create your account</h1>
                <input className="w-[60%] h-[58px] mx-auto border-2 border-gray-200 px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black"
                       type="text"
                       name="lastName"
                       id="lastName"
                       placeholder="Last Name"
                       required
                       value={lastName}
                       onChange={(e)=>setLastName(e.target.value)}
                />
                <input className="w-[60%] h-[58px] mx-auto border-2 border-gray-200 px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black"
                       type="text"
                       name="firstName"
                       id="firstName"
                       placeholder="First Name"
                       required
                       value={firstName}
                       onChange={(e)=>setFirstName(e.target.value)}
                />
                <input className="w-[60%] h-[58px] mx-auto border-2 border-gray-200 px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black"
                       type="text"
                       name="userame"
                       id="username"
                       placeholder="Username"
                       required
                       value={username}
                       onChange={(e)=>setUsername(e.target.value)}
                />


                <input className="w-[60%] h-[58px] mx-auto border-2 border-gray-200  px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black"
                       type="password"
                       name="pwd"
                       id="pwd"
                       placeholder="Password"
                       required
                       value={pwd}
                       onChange={(e)=>setPwd(e.target.value)}
                />
                <button
                    className="flex w-[50%] h-16 mx-auto mt-12 mb-24 text-white text-xl font-inter font-bold justify-center items-center rounded-3xl px-6 cursor-pointer bg-black">
                    Sign up
                </button>
            </form>
            <Footer/>
        </div>
    );
};

export default Register
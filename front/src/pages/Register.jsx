import {Link} from "react-router-dom"
import Footer from "../components/Footer.jsx";

const Register = () => {
    return (
        <div className="w-full h-[100vh] bg-[#A3A3A3] py-5">
            <form className="w-[60%] h-[auto] flex flex-col mx-auto bg-white mt-24 mb-44 rounded-xl gap-10">
                <Link to="/">
                    <img src="./img/y.jpg" alt="y logo" width={"100px"} className="mt-5 ml-[48%] cursor-pointer"/>
                </Link>
                <h1 className=" text-start text-5xl font-inter font-bold mt-8 ml-[10%]">Create your account</h1>
                <input className="w-[60%] h-[58px] mx-auto border-2 border-gray-200 px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black" type="text" name="lastName" placeholder="Last Name" required/>
                <input className="w-[60%] h-[58px] mx-auto border-2 border-gray-200  px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black" type="text" name="firstName" placeholder="First Name" required/>
                <input className="w-[60%] h-[58px] mx-auto border-2 border-gray-200  px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black" type="text" name="username" placeholder="Username" required/>
                <input className="w-[60%] h-[58px] mx-auto border-2 border-gray-200  px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black" type="password" name="pwd" placeholder="Password" required/>
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
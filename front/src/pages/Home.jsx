import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className="flex w-[90%] mx-auto h-[92vh] items-center justify-around">
                <div className="h-[60vh] mt-[10%]">
                    <img src="./img/y.jpg" alt="Y logo"/>
                </div>
                <div className="flex flex-col h-[60vh] mt-[10%]">
                    <h1 className="text-8xl font-inter font-extrabold">Happening now</h1>
                    <h2 className="text-5xl font-inter font-extrabold mt-12">Join today.</h2>
                    <Link to="/login"
                        className="flex w-[50%] h-14 mx-auto mt-12 border border-[#FF0101] justify-center items-center rounded-3xl px-6 cursor-pointer">
                        <img src="img/google.png" alt="google logo" width="30px" height="30px" className="mr-2"/>
                        <p className="text-xl font-inter font-bold">Sign up with Google</p>
                    </Link>
                    <Link to="/login"
                        className="flex w-[50%] h-14 mx-auto mt-4 border border-[#FF0101] justify-center items-center rounded-3xl px-6 cursor-pointer">
                        <img src="img/apple-logo.png" alt="apple logo" width="30px" height="30px"/>
                        <p className="text-xl font-inter font-bold">Sign in with Apple</p>
                    </Link>
                    <p className="text-center text-lg mt-6">or</p>
                    <Link to="/register"
                        className="flex w-[50%] h-14 mx-auto mt-4 bg-[#1B8CD8] text-white text-xl font-inter font-bold  justify-center items-center rounded-3xl px-6 cursor-pointer">Create
                        Account
                    </Link>
                    <p className="w-[50%] mx-auto mt-1">By signing up, you agree to the <span
                        className="text-[#1B8CD8]"> Terms of Service</span> and <span className="text-[#1B8CD8]">Privacy Policy</span>,
                        including <span className="text-[#1B8CD8]">Cookie Use</span>.</p>
                    <h3 className="mt-12 text-center text-2xl font-inter font-extrabold">Already have an account ?</h3>
                    <Link to="/login"
                        className="flex w-[50%] h-14 mx-auto mt-12 border border-[#CFD9DE] text-[#1B8CD8] text-xl font-inter font-bold justify-center items-center rounded-3xl px-6 cursor-pointer hover:bg-[#CFD9DE]">Sign
                        in
                    </Link>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home
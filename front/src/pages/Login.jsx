
 const Login = () => {
    return (
        <div className="w-full h-[95vh] bg-[#A3A3A3] py-5">
            <form className="w-[60%] h-[auto] flex flex-col mx-auto bg-white my-12 rounded-xl gap-8">
                <img src="./img/y.jpg" alt="y logo" width={"100px"} className="mt-5 ml-[48%]"/>
                <h1 className=" text-start text-5xl font-inter font-bold mt-4 ml-[10%]">Sign in to Y</h1>
                <button
                    className="flex w-[50%] h-14 mx-auto mt-6 border-2 border-gray-200 justify-center items-center rounded-3xl px-6 cursor-pointer">
                    <img src="img/google.png" alt="google logo" width="30px" height="30px" className="mr-2"/>
                    <p className="text-xl font-inter font-bold">Sign up with Google</p>
                </button>
                <button
                    className="flex w-[50%] h-14 mx-auto mt-4 border-2 border-gray-200 justify-center items-center rounded-3xl px-6 cursor-pointer">
                    <img src="img/apple-logo.png" alt="apple logo" width="30px" height="30px"/>
                    <p className="text-xl font-inter font-bold">Sign up with Apple</p>
                </button>

                <p className="text-center text-2xl mt-6">or</p>

                <input
                    className="w-[60%] h-[58px] mx-auto border-2 border-gray-200  px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black"
                    type="text" name="username" placeholder="Username" required/>
                <input
                    className="w-[60%] h-[58px] mx-auto border-2 border-gray-200  px-4 placeholder:text-xl placeholder:font-thin placeholder:text-black"
                    type="password" name="pwd" placeholder="Password" required/>
                <button
                    className="flex w-[50%] h-16 mx-auto mt-12 text-white text-xl font-inter font-bold justify-center items-center rounded-3xl px-6 cursor-pointer bg-black">
                    Sign in
                </button>
                <button
                    className="flex w-[50%] h-14 mx-auto mt-4 border-2 border-gray-200 justify-center items-center rounded-3xl px-6 cursor-pointer">
                    <p className="text-xl font-inter font-bold">Forgot Password</p>
                </button>
                <p className="text-center text-xl font-inter mb-4">Don't have an account? <span className="text-[#1B8CD8] cursor-pointer">Sign up</span></p>
            </form>

        </div>
    );
 };

 export default Login
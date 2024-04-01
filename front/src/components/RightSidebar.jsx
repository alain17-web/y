import {Link} from "react-router-dom";

const RightSidebar = () => {
    return (
        <div className="flex flex-col mt-12 w-[25%] h-[100vh] gap-10 border border-r-gray-200">

            {/*Premium*/}
            <div className={"mt-12 h-auto mx-auto ml-8 mr-5 bg-[#F7F9F9] p-4 rounded-xl"}>
                <h2 className={"font-inter font-bold text-2xl"}>Subscribe to Premium</h2>
                <p className={"font-inter text-xl mt-5"}>Subscribe to unlock new features and if eligible, receive a
                    share of ads revenue.</p>
                <button
                    className="flex w-[50%] h-14  mt-4 justify-center items-center rounded-3xl px-6 bg-black cursor-pointer">
                    <p className="text-xl text-white font-inter font-bold cursor-pointer">Subscribe</p>
                </button>
            </div>

            {/*Who to follow*/}
            <div className={"flex flex-col h-auto ml-8 bg-[#F7F9F9] p-4 rounded-xl mr-5"}>
                <h2 className={"w-full font-inter font-bold text-2xl"}>Who to follow</h2>
                <div className={"mt-8 flex flex-col gap-5 "}>
                    <div className={"flex items-center justify-between"}>
                        <img src="./img/daenarys.jpg" alt="John Snow"
                             className="rounded-full object-cover w-full h-full"
                             style={{width: '60px', height: '60px'}}/>
                        <div>
                            <div className={"flex items-center" }>
                                <h3 className={"ml-2 font-inter font-bold text-lg"}>Daenarys</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     fill="#1B8CD8" className="bi bi-check-circle-fill ml-1"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                            </div>
                            <p className={"ml-2 font-inter text-lg"}>@QueenDaenarys</p>
                        </div>
                        <button
                            className="flex w-[30%] h-12  mt-4 ml-14 justify-center items-center rounded-3xl px-6 bg-black cursor-pointer">
                            <p className="text-xl text-white font-inter font-bold cursor-pointer">Follow</p>
                        </button>
                    </div>
                    <div className={"flex items-center justify-between"}>
                        <img src="./img/ned.webp" alt="Ned Stark"
                             className="rounded-full object-cover w-full h-full"
                             style={{width: '60px', height: '60px'}}/>
                        <div>
                            <div className={"flex items-center" }>
                                <h3 className={"font-inter font-bold text-lg"}>Ned Stark</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     fill="#1B8CD8" className="bi bi-check-circle-fill ml-1"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                            </div>
                            <p className={"font-inter text-lg"}>@NedStark</p>
                        </div>
                        <button
                            className="flex w-[30%] h-12  mt-4 ml-14 justify-center items-center rounded-3xl px-6 bg-black cursor-pointer">
                            <p className="text-xl text-white font-inter font-bold cursor-pointer">Follow</p>
                        </button>
                    </div>
                    <div className={"flex items-center justify-between"}>
                        <img src="./img/bran.webp" alt="Shae"
                             className="rounded-full object-cover w-full h-full"
                             style={{width: '60px', height: '60px'}}/>
                        <div>
                            <div className={"flex items-center" }>
                                <h3 className={"ml-2 font-inter font-bold text-lg"}>Bran Stark</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     fill="#1B8CD8" className="bi bi-check-circle-fill ml-1"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                            </div>
                            <p className={"ml-2 font-inter text-lg"}>@BranStark</p>
                        </div>
                        <button
                            className="flex w-[30%] h-12  mt-4 ml-14 justify-center items-center rounded-3xl px-6 bg-black cursor-pointer">
                            <p className="text-xl text-white font-inter font-bold cursor-pointer">Follow</p>
                        </button>
                    </div>
                </div>
                <Link to={"#"} className={"font-inter text-xl text-[#1B8CD8] mt-8"}>Show More</Link>
            </div>

            {/*Belgium trends*/}
            <div className={"flex flex-col h-auto ml-8 bg-[#F7F9F9] p-4 rounded-xl mr-5"}>
                <h3 className={"w-full font-inter font-bold text-2xl"}>Belgium Trends</h3>
                <div className={"flex items-center justify-between mt-6"}>
                    <p className={"font-inter text-lg"}>1 . UEFA Champions League - Trending</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         className="bi bi-three-dots cursor-pointer" viewBox="0 0 16 16">
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                </div>
                <p className={"font-extrabold text-xl"}>#CERCLU</p>

                <div className={"flex items-center justify-between mt-6"}>
                    <p className={"font-inter text-lg"}>2 - Trending</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         className="bi bi-three-dots cursor-pointer" viewBox="0 0 16 16">
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                </div>
                <p className={"font-extrabold text-xl"}>#RVV24</p>
                <p className={"font-inter text-lg"}>10.1K posts</p>

                <div className={"flex items-center justify-between mt-6"}>
                    <p className={"font-inter text-lg"}>3 . Holidays - Trending</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         className="bi bi-three-dots cursor-pointer" viewBox="0 0 16 16">
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                </div>
                <p className={"font-extrabold text-xl"}>Happy Easter</p>
                <p className={"font-inter text-lg"}>1.9M posts</p>
            </div>
        </div>
    );
};


export default RightSidebar

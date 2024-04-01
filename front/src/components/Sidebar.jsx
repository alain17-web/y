import { NavLink } from "react-router-dom"
 const Sidebar = () => {
    return (
        <div className="flex flex-col mt-12 w-[20%] h-[100vh] gap-10 border border-r-gray-200">

            <NavLink className="flex items-center ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                     className="bi bi-house-door-fill mr-10" viewBox="0 0 16 16">
                    <path
                        d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                </svg>
                <p className="text-3xl font-inter font-bold">Home</p>
            </NavLink>
            <NavLink className="flex items-center ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                     className="bi bi-search mr-10" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <p className="text-3xl font-inter">Explore</p>
            </NavLink>
            <NavLink className="flex items-center ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                     className="bi bi-bell mr-10" viewBox="0 0 16 16">
                    <path
                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                </svg>
                <p className="text-3xl font-inter">Notifications</p>
            </NavLink>
            <NavLink className="flex items-center ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                     className="bi bi-envelope mr-10" viewBox="0 0 16 16">
                    <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
                <p className="text-3xl font-inter">Messages</p>
            </NavLink>
            <NavLink className="flex items-center ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                     className="bi bi-card-list mr-10" viewBox="0 0 16 16">
                    <path
                        d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                    <path
                        d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                </svg>
                <p className="text-3xl font-inter">Lists</p>
            </NavLink>
            <NavLink className="flex items-center ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                     className="bi bi-bookmark mr-10" viewBox="0 0 16 16">
                    <path
                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                </svg>
                <p className="text-3xl font-inter">Bookmarks</p>
            </NavLink>
            <NavLink className="flex items-center ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                     className="bi bi-people mr-10" viewBox="0 0 16 16">
                    <path
                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                </svg>
                <p className="text-3xl font-inter">Communities</p>
            </NavLink>
            <NavLink className="flex items-center ml-16">
                <img src="./img/y.jpg" alt="y logo" width="36px" className="mr-10"/>
                <p className="text-3xl font-inter">Premium</p>
            </NavLink>
            <NavLink className="flex items-center ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                     className="bi bi-person mr-10" viewBox="0 0 16 16">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                <p className="text-3xl font-inter">Profile</p>
            </NavLink>
            <NavLink className="flex items-center ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                     className="bi bi-three-dots mr-10" viewBox="0 0 16 16">
                    <path
                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
                <p className="text-3xl font-inter">More</p>
            </NavLink>
            <button className="flex w-[80%] h-14 mx-auto mt-4 justify-center items-center rounded-3xl px-6 bg-[#1B8CD8] cursor-pointer">
                <p className="text-xl text-white font-inter font-bold">Post</p>
            </button>
            <div className="flex items-center mt-24 justify-around">
                <img src="./img/jsnow.webp" alt="John Snow" className="rounded-full object-cover w-full h-full"
                     style={{width: '100px', height: '100px'}}/>
                <div>
                    <h3 className={"font-inter font-bold text-xl"}>John Snow</h3>
                    <p>@johnsnow34562</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     className="bi bi-three-dots cursor-pointer" viewBox="0 0 16 16">
                    <path
                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </div>

        </div>
    );
 };

export default Sidebar
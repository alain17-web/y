import SectionHeader from "./SectionHeader.jsx";
import {useEffect, useState} from "react";
import axios from "axios";


const NewPostMain = () => {


    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJuYW1lIjoidmxhZGlja28iLCJpYXQiOjE3MTIxNjA1ODMsImV4cCI6MTcxMjMzMzM4M30.wVNJSRh-C2yDtJwEBek4Ya-8GAitrFUjcInKGhd1IqY"
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    const [newPost,setNewPost] = useState("")
    const [success,setSuccess] = useState("")
    const [errorMsg,setErrorMsg] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            setErrorMsg("")
            const res = await axios.post(
                "http://localhost:3000/api/posts/addPost/3",
                { postContent: newPost },
                config
            );
            console.log(res.data)
            setSuccess("Successfully posted")
            setNewPost("")
        }catch (err){
            console.log(err)
            setSuccess("")
            setErrorMsg("Failed to send post. Try again")
        }
    }


    return (
        <div className="w-[55%] h-[100vh] flex flex-col mt-12 ml-[20%] overflow-y-auto z-10">
            <SectionHeader/>
            {success && (
                <span className={"text-green-400 text-xl"}>{success}</span>
            )}
            {errorMsg && (
                <span className={"text-red-400 text-xl"}>{errorMsg}</span>
            )}
            <div className={"w-[86%] m-auto mt-16 h-[50vh] bg-gray-200 rounded-md  "}>
                <h1 className={"font-inter mt-8 text-center text-3xl"}>Write a post</h1>
                <form className={"w-[90%] h-[80%] m-auto border-4 border-[#1B8CD8] rounded-2xl bg-white"}
                      onSubmit={handleSubmit}
                >
                    <textarea
                        placeholder={"Your New Post"}
                        className={"placeholder:bg-white w-full  h-[80%] placeholder:text-xl font-inter pl-6 pt-6"}
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                    >

                    </textarea>

                    <button
                          className="flex w-[20%] h-14 ml-auto mr-8 justify-center items-center rounded-3xl px-6 bg-[#1B8CD8] cursor-pointer">
                        <p className="text-xl text-white font-inter font-bold">Post</p>
                    </button>

                </form>
                <p className={"font-inter ml-16 mt-4 text-xl text-[#1B8CD8]"}>Everyone can reply</p>
            </div>
        </div>
    );
};

export default NewPostMain
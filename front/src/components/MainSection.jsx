import SectionHeader from "./SectionHeader.jsx";
import Posts from "./Posts.jsx";



const MainSection = () => {
    return (
        <div className="w-[55%] h-[100vh] flex flex-col mt-12 ml-[20%] overflow-y-auto z-10">
            <SectionHeader/>
            <Posts />


        </div>
    );
};

export default MainSection
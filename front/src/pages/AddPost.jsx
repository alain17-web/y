import Topbar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import RightSidebar from "../components/RightSidebar.jsx";
import NewPostMain from "../components/NewPostMain.jsx";

const AddPost = () => {
    return (
        <div>
            <Topbar/>
            <div className="flex">
                <Sidebar/>
                <NewPostMain/>
                <RightSidebar/>
            </div>
        </div>
    );
};

export default AddPost
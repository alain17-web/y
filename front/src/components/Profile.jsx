import Topbar from "./Topbar.jsx";
import Sidebar from "./Sidebar.jsx";
import RightSidebar from "./RightSidebar.jsx";
import ProfileMain from "./ProfileMain.jsx";

const Profile = () => {
    return (
        <div>
            <Topbar/>
            <div className="flex">
                <Sidebar/>
                <ProfileMain/>
                <RightSidebar/>
            </div>
        </div>
    );
};

export default Profile
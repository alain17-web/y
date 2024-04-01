import Topbar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import MainSection from "../components/MainSection.jsx";
import RightSidebar from "../components/RightSidebar.jsx";

const Dashboard = () => {
    return (
        <div>
           <Topbar/>
            <div className="flex">
                <Sidebar/>
                <MainSection/>
                <RightSidebar/>
            </div>
        </div>
    );
};

export default Dashboard
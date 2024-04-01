import Topbar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Dashboard = () => {
    return (
        <div>
           <Topbar/>
            <div>
                <Sidebar/>
            </div>
        </div>
    );
};

export default Dashboard
import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import Footer from "../../components/shared/Footer/Footer";

const Root = () => {
    return (
        <div className="layout">
            
            {/* Navbar Section */}
            <header> 
                <Navbar />
            </header>

            {/* Main Content Layout */}
            <div className="main-content hidden md:flex">
                {/* Left Panel (Sidebar or Navigation) */}
                <LeftPanel />
                
                {/* Outlet for Main Content */}
                <div 
                    className="content" 
                    style={{ 
                        flexGrow: 1, 
                        overflowY: 'auto', 
                        overflowX: 'hidden', 
                        padding: '1rem' 
                    }}
                >
                    <Outlet />
                </div>

                {/* Right Panel (Tasks/Notifications/Other) */}
                <RightPanel />
            </div>
            
            {/* Footer Section */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Root;

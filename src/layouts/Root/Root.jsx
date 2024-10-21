import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <header> 
                <Navbar />
             </header>
            <Outlet />
            <footer> footer </footer>
        </div>
    );
};

export default Root;
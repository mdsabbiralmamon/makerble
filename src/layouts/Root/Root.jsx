import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header> header </header>
            <Outlet />
            <footer> footer </footer>
        </div>
    );
};

export default Root;
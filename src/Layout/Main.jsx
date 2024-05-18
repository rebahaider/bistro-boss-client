import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="space-y-20">
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;
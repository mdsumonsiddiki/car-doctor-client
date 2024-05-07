import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";
import Footer from "../shared/Footer";

const Root = () => {
    return (
        <div className="font-inter">
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;
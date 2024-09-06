import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";


const DeshobardLayout = () => {
    return (
        <div className="flex gap-4 flex-col lg:flex-row md:flex-row">
         <SideBar></SideBar>
         <Outlet></Outlet>
        </div>
    );
};

export default DeshobardLayout;
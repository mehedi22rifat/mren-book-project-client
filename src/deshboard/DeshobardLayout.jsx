import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Helmet } from "react-helmet-async";



const DeshobardLayout = () => {
    return (
       <div>
        <Helmet>
            <title>Book Store || Deshboard</title>
        </Helmet>
        <div className="flex gap-4 flex-col lg:flex-row md:flex-row">
         <SideBar></SideBar>
         <Outlet></Outlet>
        </div>
       </div>
    );
};

export default DeshobardLayout;
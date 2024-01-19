import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";


const MainLayout = () => {
    return (
        <div className='min-w-screen min-h-screen bg-slate-100'>
            <Sidebar></Sidebar>
            <div className="ml-[250px] w-[calc(100vw-268px)] min-h[100vh]">
                <Header></Header>
                <div className="p-4">
                    <div className="pt-[85px]">
                    <Outlet></Outlet>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default MainLayout;
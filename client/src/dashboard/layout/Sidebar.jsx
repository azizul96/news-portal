import { Link, useLocation } from "react-router-dom";
import {AiFillDashboard, AiOutlinePlus} from 'react-icons/ai'
import {ImProfile} from 'react-icons/im'
import {FiUsers} from 'react-icons/fi'
import {BiNews} from 'react-icons/bi'
import { FaPlus } from "react-icons/fa";


const Sidebar = () => {
    const { pathname } = useLocation()

    const userInfo = {
        role: "writer"
    }

    return (
        <div className="w-[250px] h-screen fixed left-0 top-0 bg-white">
            <div className="h-[70px] flex justify-center items-center">
                <Link to="/">
                    <h1 className="text-red-500 text-xl font-bold">News Portal</h1>
                </Link>
            </div>
            <ul className="px-3 flex flex-col gap-y-1 font-medium">
                {
                    userInfo.role === "admin" ? 
                    <>
                    <li>
                        <Link to='/dashboard/admin' className={`${pathname === '/dashboard/admin' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                            <span className="text-xl"><AiFillDashboard></AiFillDashboard></span>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/add-writer' className={`${pathname === '/dashboard/add-writer' ? 'bg-indigo-500 text-white':'bg-white text-[#404040f6]'} px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                            <span className="text-xl"><AiOutlinePlus></AiOutlinePlus></span>
                            <span>Add Writer</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/writers' className={`${pathname === '/dashboard/writers' ? 'bg-indigo-500 text-white':'bg-white text-[#404040f6]'} px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                            <span className="text-xl"><FiUsers></FiUsers></span>
                            <span>Writers</span>
                        </Link>
                    </li>
                    </> 
                    : 
                    <>
                    <li>
                        <Link to='/dashboard/writer' className={`${pathname === '/dashboard/admin' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                            <span className="text-xl"><AiFillDashboard></AiFillDashboard></span>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/create-news' className={`${pathname === '/dashboard/create-news' ? 'bg-indigo-500 text-white':'bg-white text-[#404040f6]'} px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                            <span className="text-xl"><FaPlus></FaPlus></span>
                            <span>Create News</span>
                        </Link>
                    </li>
                    </>
                }
                
                <li>
                    <Link to='/dashboard/news' className={`${pathname === '/dashboard/news' ? 'bg-indigo-500 text-white':'bg-white text-[#404040f6]'} px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl"><BiNews></BiNews></span>
                        <span>News</span>
                    </Link>
                </li>
                
                <li>
                    <Link to='/dashboard/profile' className={`${ pathname === '/dashboard/profile' ? 'bg-indigo-500 text-white':'bg-white text-[#404040f6]'} px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl"><ImProfile></ImProfile></span>
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
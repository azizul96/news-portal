import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'

const AdminIndex = () => {
    return (
        <div className="mt-2">
            <div className="grid grid-cols-5 gap-x-4">
                <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700 " >
                    <span className="text-xl font-bold">50</span>
                    <span className="text-sm">Total News</span>
                </div>
                <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700 " >
                    <span className="text-xl font-bold">50</span>
                    <span className="text-sm">Pending News</span>
                </div>
                <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700 " >
                    <span className="text-xl font-bold">50</span>
                    <span className="text-sm">Active News</span>
                </div>
                <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700 " >
                    <span className="text-xl font-bold">50</span>
                    <span className="text-sm">Deactive News</span>
                </div>
                <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700 " >
                    <span className="text-xl font-bold">50</span>
                    <span className="text-sm">Writers</span>
                </div>

            </div>
            <div className="bg-white p-4 mt-5">
                <div className="flex justify-between items-center pb-4">
                    <h2>Recent news</h2>
                    <Link>View all</Link>
                </div>
                
                <div className='relative overflow-x-auto p-4'>
                <table className='w-full text-sm text-left text-slate-600'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                        <tr>
                            <th className='px-7 py-3'>No</th>
                            <th className='px-7 py-3'>Title</th>
                            <th className='px-7 py-3'>Image</th>
                            <th className='px-7 py-3'>Category</th>
                            <th className='px-7 py-3'>Description</th>
                            <th className='px-7 py-3'>Date</th>
                            <th className='px-7 py-3'>Status</th>
                            <th className='px-7 py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1,2,3,4,5,6].map((n,i)=><tr key={i} className='bg-white border-b' >
                            <td className='px-6 py-4'>{i+1}</td>
                            <td className='px-6 py-4'>India gets its longest glass b...</td>
                            <td className='px-6 py-4'>
                                <img className='w-[40px] h-[40px]' src="https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp" alt="" />
                            </td>
                            <td className='px-6 py-4'>Travel</td>
                            <td className='px-6 py-4'>You all must have wa...</td>
                            <td className='px-6 py-4'>October 10, 2023</td>
                            <td className='px-6 py-4'>
                                <span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer' >active</span>
                            </td>
                            <td className='px-6 py-4'>
                                <div className='flex justify-start items-center gap-x-4 text-white'>
                                    <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye /></Link>
                                    <Link className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50'><FaEdit /></Link>
                                    <div className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'><FaTrash /></div>
                                </div>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default AdminIndex;
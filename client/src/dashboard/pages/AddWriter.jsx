import { Link } from "react-router-dom";

const AddWriter = () => {
    return (
        <div className="bg-white rounded-md">
            <div className='flex justify-between p-4'>
                <h2 className='text-xl font-medium'>Add Writers</h2>
                <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/writers'>Writers</Link>
            </div>
            <div className="p-4">
                <form action="">
                    <div className="grid grid-cols-2 gap-x-8 mb-3">
                        <div className="flex flex-col gap-y-2 ">
                            <label className="text-base font-medium text-gray-600">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name" className="px-3 py-2 rounded-md outline-0 border-gray-300 focus:border-green-500 border-2 h-10"/>
                        </div>
                        <div className="flex flex-col gap-y-2 ">
                            <label className="text-base font-medium text-gray-600">Category</label>
                            <select type="text" name="category" id="category" placeholder="Name" className="px-3 py-2 rounded-md outline-0 border-gray-300 focus:border-green-500 border-2 h-10">
                                <option value="">Select Category</option>
                                <option value="education">Education</option>
                                <option value="travel">Travel</option>
                                <option value="health">Health</option>
                                <option value="international">International</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 mb-3">
                        <div className="flex flex-col gap-y-2 ">
                            <label className="text-base font-medium text-gray-600">Email</label>
                            <input type="text" name="email" id="email" placeholder="Email" className="px-3 py-2 rounded-md outline-0 border-gray-300 focus:border-green-500 border-2 h-10"/>
                        </div>
                        <div className="flex flex-col gap-y-2 ">
                            <label className="text-base font-medium text-gray-600">Password</label>
                            <input type="text" name="password" id="password" placeholder="Password" className="px-3 py-2 rounded-md outline-0 border-gray-300 focus:border-green-500 border-2 h-10"/>
                        </div>
                    </div>
                    <div className="mt-8">
                    <button className='px-3 py-[6px] bg-blue-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/writers'>Add Writer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddWriter;
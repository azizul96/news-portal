import { FaImage } from 'react-icons/fa'

const Profile = () => {
    return (
        <div className="w-full grid grid-cols-2 gap-x-6 mt-5">
            <div className=" bg-white gap-x-3 p-6 rounded flex justify-center items-center">
                <div>
                    <label htmlFor="img" className={`w-[150px] h-[150px] rounded text-[#404040] gap-2 flex justify-center items-center border-2 border-dashed cursor-pointer`}>
                        <div className="flex justify-center items-center flex-col gap-y-2">
                            <span className='text-2xl'><FaImage/></span>
                            <span>Select Image</span>
                        </div>
                    </label>
                    <input className='hidden' type="file" name="img" id="img" />
                </div>
                <div className='text-[#404040] flex flex-col gap-y-1 justify-center items-start'>
                    <span>Name : Alif Alamin</span>
                    <span>Email : alifalamin42@gmail.com</span>
                    <span>Category : Education</span>
                </div>
            </div>
            <div className=" bg-white px-6 py-4 text-[#404040]">
                <h2 className='pb-3 text-center'>Change Password</h2>

                <form action="">
                    <div className="grid grid-cols-1 gap-y-5 mb-3">
                        <div className="flex flex-col gap-y-2 ">
                            <label className="text-base font-medium text-gray-600">Old Password</label>
                            <input type="password" name="oldPassword" id="oldPassword" placeholder="Old Password" className="px-3 py-2 rounded-md outline-0 border-gray-300 focus:border-green-500 border-2 h-10"/>
                        </div>
                        <div className="flex flex-col gap-y-2 ">
                            <label className="text-base font-medium text-gray-600">New Password</label>
                            <input type="password" name="newPassword" id="newPassword" placeholder="New Password" className="px-3 py-2 rounded-md outline-0 border-gray-300 focus:border-green-500 border-2 h-10"/>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className='px-3 py-[6px] bg-blue-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/writers'>Change Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
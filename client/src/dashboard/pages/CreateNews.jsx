import { Link } from 'react-router-dom'
import { MdCloudUpload } from 'react-icons/md'
import JoditEditor from 'jodit-react'
import { useState } from 'react';
import Gallery from '../components/Gallery';

const CreateNews = () => {

    const [show, setShow] = useState(false)
    return (
        <div className='bg-white rounded-md'>
            <div className='flex justify-between p-4'>
                <h2 className='text-xl font-medium'>Add News</h2>
                <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/news'>News</Link>

            </div>

            <div className='p-4 '>
                <form>
                    <div className="flex flex-col gap-y-2 mb-6">
                        <label className="text-base font-medium text-gray-600">Title</label>
                        <input type="text" name="email" id="email" placeholder="Title" className="px-3 py-2 rounded-md outline-0 border-gray-300 focus:border-green-500 border-2 h-10"/>
                    </div>
                    <div className='mb-6'>
                        <div>
                            <label htmlFor="img" className={`w-full h-[180px] rounded text-[#404040] gap-2 flex justify-center items-center border-2 border-dashed cursor-pointer`}>
                                <div className="flex justify-center items-center flex-col gap-y-2">
                                    <span className='text-2xl'><MdCloudUpload/></span>
                                    <span>Select Image</span>
                                </div>
                            </label>
                            <input className='hidden' type="file" name="img" id="img" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 mb-6">
                        <div className='flex justify-start items-center gap-x-2'>
                            <h2 className='text-base font-medium text-gray-600'>Description</h2>
                            <div onClick={()=>setShow(true)}>
                                <span className='text-2xl cursor-pointer'><MdCloudUpload/></span>
                            </div>
                        </div>
                        <div>
                            <JoditEditor/>
                        </div>
                    </div>
                    <div className="mt-8">
                    <button className='px-3 py-[6px] bg-blue-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/writers'>Add News</button>
                    </div>
                </form>
            </div>
            {
                show && <Gallery setShow={setShow} images={[]}/>  
            }
        </div>
    );
};

export default CreateNews;
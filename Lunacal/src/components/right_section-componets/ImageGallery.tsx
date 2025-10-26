import { FaQuestionCircle } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';

function ImageGallery() {
return (
    <>
        <div className="bg-[#363c42] w-[720px] h-[300px] rounded-2xl shadow-md shadow-main-divs mb-4 relative">
            <div className="absolute top-5 left-2 text-gray-400 hover:text-white cursor-pointer">
                <FaQuestionCircle className="w-5 h-5" />
            </div>
            <div className="flex justify-between itmems-center w-[88%] absolute left-0 right-0 mx-auto top-5">
                <div className="bg-black items-center flex justify-center w-35 h-14 rounded-3xl">
                Gallery
                </div>
                <div className="flex flex-row gap-10 justify-center items-center">

                <button className="bg-[#363c42] shadow-add-image-button rounded-4xl w-36 h-11 items-center text-xs font-semibold">
                    <span className='w-10 h-10 mr-2'>+</span>
                    ADD IMAGE
                </button>

                <div className="flex justify-between items-center gap-5">
                    <button className="bg-[#292c30] hover:bg-black/50 w-11 h-11 rounded-full pb-1 shadow-profile-widget"></button>
                    <button className="bg-[#292c30] hover:bg-black/50 w-11 h-11 rounded-full pb-1 shadow-profile-widget"></button>
                </div>

                </div>
            </div>
            <div className="absolute top-36 left-2 flex items-center space-x-2 text-gray-400">
                <BsGridFill className="w-4 h-4" /> {/* Use Tailwind classes for size and color */}
            </div>
        </div>  
    </>
)}

export default ImageGallery

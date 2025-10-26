import { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
//import { AboutMe } from "./tabs/About"
function Rightsection() {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="w-[50%] rounded-lg justify-center items-center mt-10">
      <div className="bg-[#363c42] w-[720px] h-[300px] rounded-2xl mb-4 relative shadow-md shadow-main-divs">
        <div className="absolute top-6 left-4 text-gray-400 hover:text-white cursor-pointer">
          <FaQuestionCircle className="w-5 h-5" />
        </div>
        <div className="bg-black w-[80%] h-14 flex flex-row justify-around items-center rounded-2xl mx-auto 
          top-5 absolute left-0 right-0">
          {['About Me', 'Experiences', 'Recommended'].map((tab) => (
            <button
              key={tab}
              className={`w-45 h-11 rounded-xl  transition-colors duration-300 ${
                activeTab === tab ? 'bg-[#28292f] shadow-tab text-white' : 'text-gray-400 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          {/* page content */}
        </div>

        <div className="absolute top-34 left-4 flex items-center space-x-2 text-gray-400">
          <BsGridFill className="w-4 h-4" /> 
        </div>
      </div>

      <div className="space-y-1 w-[90%] items-center justify-center pl-20 mb-4">
        <div className="h-1 bg-[#363c42] w-full rounded-2xl shadow-md shadow-black"></div>
      </div>

      <div className="bg-[#363c42] w-[720px] h-[300px] rounded-2xl shadow-md shadow-main-divs mb-4 relative">
        <div className="absolute top-6 left-4 text-gray-400 hover:text-white cursor-pointer">
          <FaQuestionCircle className="w-5 h-5" />
        </div>
        <div className="flex justify-between itmems-center w-[80%] absolute left-0 right-0 mx-auto top-5">
          <div className="bg-black items-center flex justify-center w-35 h-14 rounded-3xl">
            Gallery
          </div>
          <div className="flex flex-row gap-10 justify-center items-center">

            <button className="bg-[#363c42] shadow-add-image-button rounded-4xl w-36 h-11 text-xs font-semibold">
              ADD IMAGE
            </button>

            <div className="flex justify-between items-center gap-5">
              <button className="bg-[#292c30] hover:bg-black/50 w-11 h-11 rounded-full pb-1 shadow-profile-widget"></button>
              <button className="bg-[#292c30] hover:bg-black/50 w-11 h-11 rounded-full pb-1 shadow-profile-widget"></button>
            </div>

          </div>
        </div>
        <div className="absolute top-34 left-4 flex items-center space-x-2 text-gray-400">
          <BsGridFill className="w-4 h-4" /> {/* Use Tailwind classes for size and color */}
        </div>
      </div>

      <div className="space-y-1 w-[90%] items-center justify-center pl-20 mb-5">
        <div className="h-1 bg-[#363c42] w-full rounded-2xl shadow-md shadow-black"></div>
      </div>
    </div>
  )
}

export default Rightsection

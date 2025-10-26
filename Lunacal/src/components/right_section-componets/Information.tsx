import { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';

function Information() {

    const [activeTab, setActiveTab] = useState('About Me');

return (
    <>
        <div className="bg-[#363c42] w-[720px] h-[300px] rounded-2xl mb-4 relative shadow-md shadow-main-divs">
            <div className="absolute top-5 left-2 text-gray-400 hover:text-white cursor-pointer">
                <FaQuestionCircle className="w-5 h-5" />
            </div>
            <div className="bg-black w-[88%] h-14 flex justify-around items-center rounded-2xl mx-auto 
                top-5 absolute left-0 right-0">
                {['About Me', 'Experiences', 'Recommended'].map((tab) => (
                <button
                    key={tab}
                    className={`w-50 h-11 pb-1 flex justify-center items-center rounded-xl font-semibold transition-colors duration-300 ${
                    activeTab === tab ? 'bg-[#28292f] shadow-tab text-white' : 'text-gray-400 hover:bg-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
                ))}
            </div>
            <div className="p-4 text-[#969696] text-xl absolute top-20 left-8 right-4">
                {activeTab === 'About Me' && (
                <>
                    <p className="mb-4">Hello! I'm Dave, your sales rep here from Salesforce.
                    I've been working at this awesome company for 3 years now.
                    </p>
                    <p>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Era. 
                    Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
                    </p>
                </>
                )}
                {activeTab === 'Experiences' && <p>Details about experiences would go here.</p>}
                {activeTab === 'Recommended' && <p>Recommendations would be displayed here.</p>}
            </div>
            <div className="absolute top-36 left-2 flex items-center space-x-2 text-gray-400">
                <BsGridFill className="w-4 h-4" /> 
            </div>
        </div>
    </>
)}

export default Information

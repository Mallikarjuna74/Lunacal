

import { FaArrowLeft, FaArrowRight, FaPlus} from 'react-icons/fa';
import { useState, useRef } from 'react';
import type { ChangeEvent } from 'react';
function ImageGallery() {
    const [galleryImages, setGalleryImages] = useState<string[]>([
    '/images/cover.jpg',
    '/images/cover.jpg',
    '/images/cover.jpg',
    '/images/cover.jpg',
    '/images/cover.jpg',
    '/images/cover.jpg',
    
    ]);
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === "string") {
                setGalleryImages(prevImages => [...prevImages, reader.result as string]);
            }
        };
        reader.readAsDataURL(file);
        }
    };

    const scrollGallery = (direction: 'left' | 'right') => {
        if (galleryRef.current) {
            const gallery = galleryRef.current;
            const firstImage = gallery.children[0] as HTMLElement;

            if (firstImage) {
                const style = window.getComputedStyle(firstImage);
                const scrollAmount = firstImage.offsetWidth + parseInt(style.marginRight, 10) + parseInt(style.marginLeft, 10) || 16;
                gallery.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth',
                });
            }
        }
    };

    const handleAddImageClick = () => {
        fileInputRef.current?.click();
    };

return (
    <>
        <div className="bg-[#363c42] w-[99%] h-[300px] rounded-2xl shadow-md shadow-main-divs mb-4 relative">
            
            <div className="absolute top-3 left-0 text-gray-400 hover:text-white cursor-pointer">
                <img src="/images/question.svg" alt="Help" className="w-10 h-10"/>
            </div>

            <div className="flex justify-between itmems-center w-[86%] absolute left-0 right-0 mx-auto top-5 mb-15">
                
                <div className="bg-black items-center flex justify-center w-35 h-14 rounded-3xl">
                    Gallery
                </div>

                <div className="flex flex-row gap-10 justify-center items-center">
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />

                    <button
                        onClick={handleAddImageClick}
                        className="bg-[#42484f] shadow-add-image-button rounded-4xl w-36 h-11 items-center text-xs font-semibold"
                    >
                        
                        <FaPlus className="mr-2" /> ADD IMAGE
                    </button>

                    <div className="flex justify-between items-center gap-5">
                        <button 
                            className="bg-[#292c30] hover:bg-black/50 flex items-center justify-center w-11 h-11 rounded-full shadow-profile-widget"
                            onClick={() => scrollGallery('left')}>
                            <FaArrowLeft className="w-4 h-4 text-[#6F787C]" />
                        </button>
                        <button 
                            className="bg-[#292c30] hover:bg-black/50 flex items-center justify-center w-11 h-11 rounded-full shadow-profile-widget"
                            onClick={() => scrollGallery('right')}>
                            <FaArrowRight className="w-4 h-4 text-[#6F787C]" />
                        </button>
                    </div>
                </div>
            </div>

            <div 
                ref={galleryRef}
                className="pt-24 mx-auto w-[90%] h-full flex items-center space-x-4 overflow-x-scroll scrollbar-hide"
            >
                {galleryImages.slice(0, 6).map((imageSrc, index) => (
                    <div 
                        key={index} 
                        className="shrink-0 mx-2 w-44 h-42 grayscale contrast-125 rounded-2xl overflow-hidden shadow-md
                        hover:grayscale-0 hover:contrast-100 transition-all duration-500 cursor-pointer
                        hover:transform hover:-translate-y-3 hover:shadow-xl hover:shadow-black hover:-rotate-3 hover:z-20
                        hover:-translate-z-3"
                    >
                        <img
                            src={imageSrc}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute top-36 left-0 flex items-center space-x-2 text-gray-400">
                <img src="/images/Untitled.svg" alt="Decoration" 
                className="w-8 h-8"/>
            </div>
        </div>  
    </>
)}

export default ImageGallery

import Information from "./right_section-componets/Information"
import DividerBar from "./right_section-componets/DividerBar"
import ImageGallery from "./right_section-componets/ImageGallery"


//import { AboutMe } from "./tabs/About"
function Rightsection() {
  

  return (
    <div className="w-[45%] rounded-lg justify-center items-center mt-10">
      <Information />
      <DividerBar />
      <ImageGallery />
      <DividerBar />
    </div>
  )
}

export default Rightsection

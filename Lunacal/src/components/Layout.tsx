import Rightsection from "./Rightsection"
import Leftsection from "./Leftsection"

export default function Layout() {
  return (
    <div className="bg-[#25292e] text-white h-screen rounded-3xl flex justify-between items-center gap-10 pl-5 pr-20">
      <Leftsection />
      <Rightsection />
    </div>
  )
}

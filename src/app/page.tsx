import Image from "next/image";
import Logo from "../../assets/Logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import Mega from "../../assets/mega.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <nav className="flex bg-black left-0 top-0 fixed w-full h-[84px] px-[15px] justify-between items-center">
        <div className="left-0 w-auto relative mr-auto">
          <Image src={Logo} width={125} height={10} alt="Logo" />
        </div>
        <ul className="relative items-center h-full z-1 flex text-white uppercase font-semibold tracking-[0.75px] cursor-pointer">
          <li className="border-b-none bg-black h-full px-4">
            <a className="list">
              <span className="span">Expansions</span>
              <MdOutlineKeyboardArrowDown />
            </a>
          </li>
          <li className="border-b-none bg-black h-full px-4">
            <a className="list">
              <span className="span">Cards</span>
              <MdOutlineKeyboardArrowDown />
            </a>
          </li>
          <li className="border-b-none bg-black h-full px-4">
            <a className="list">
              <span className="span">TCG Live</span>
              <MdOutlineKeyboardArrowDown />
            </a>
          </li>
          <li className="border-b-none bg-black h-full px-4">
            <a className="list">
              <span className="span">How to play</span>
              <MdOutlineKeyboardArrowDown />
            </a>
          </li>
          <li className="border-b-none bg-black h-full px-4">
            <a className="list">
              <span className="span">News</span>
            </a>
          </li>
          <li className="border-b-none bg-black h-full px-4">
            <a className="list">
              <span className="span">Where to buy</span>
            </a>
          </li>
        </ul>
      </nav>
      <header className="bg-[url('../../assets/Lucario.jpg')] absolute bg-cover bg-center bg-no-repeat w-full max-w-[1470px] h-[654px] mt-21">
        <div className="w-full max-w-[1470px] flex py-48 px-10">
          <div className="w-full flex flex-col align-center pt-2 gap-y-7 max-w-[420px] items-center ">
            <Image src={Mega} width={430} height={200} alt="mega" />
            <button className="btn from-[#6ee7ff] to-[#37ffbc] max-w-[380px] hover:from-[#ffef14] hover:to-[#fbb064] hover:drop-shadow-[#ff8863]">
              <span className="pr-2">Go to expansion page</span>
              <MdOutlineKeyboardArrowRight className="text-3xl" />
            </button>
            <button className="btn from-[#ffef14] to-[#fbb064] max-w-[291px] hover:from-[#6ee7ff] hover:to-[#37ffbc] hover:drop-shadow-[#019fe6]">
              <span className="pr-2">See card gallery</span>
              <MdOutlineKeyboardArrowRight className="text-3xl" />
            </button>
          </div>
          <button className="w-full max-w-[160px] h-[48px] rounded-[3px] gap-x-2 bg-black flex items-center justify-center text-white py-[10px] px-3 cursor-pointer absolute top-6 right-2">
            Reduce motion
            <FaRegCircle className="text-[#e6e6e6]" />
          </button>
        </div>
      </header>
    </div>
  );
}

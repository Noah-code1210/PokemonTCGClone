import Image from "next/image";
import Logo from "../../assets/Logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import Mega from "../../assets/mega.png";

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
      <header className="bg-[url('../../assets/Lucario.jpg')] bg-cover bg-center bg-no-repeat w-full max-w-[1470px] mt-21">
        <div className="w-full max-w-[1470px] flex justify-start px-10 h-items-center">
          <div className="flex p-2">
            <div className="w-full h-[660px] items-center justify-center">
              <Image src={Mega} width={100} height={100} alt="mega" />
            </div>
          </div>
          <div className="w-full flex justify-end pt-2">
            <button className="w-full max-w-[160px] h-[48px] rounded-[3px] gap-x-2 right-2 bg-black flex items-center justify-center text-white py-[10px] px-3 cursor-pointer">
              Reduce motion
              <FaRegCircle className="text-[#e6e6e6]" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

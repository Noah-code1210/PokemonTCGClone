import Image from "next/image";
import Logo from "../../assets/Logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <nav className="flex bg-black left-0 top-0 absolute w-full h-[84px] px-[15px] justify-between items-center">
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
    </div>
  );
}

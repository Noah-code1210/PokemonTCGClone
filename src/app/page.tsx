import Image from "next/image";
import Logo from "../../assets/Logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <div className="flex bg-black w-full max-w-[1470px] h-[10.5vh] px-[15px] justify-between items-center">
        <Image src={Logo} width={125} height={10} alt="Logo" />
        <ul className="relative items-center h-full z-1 flex text-white uppercase font-semibold tracking-[0.75px] cursor-pointer">
          <li className="border-b-none bg-black h-full px-4">
            <a className="list">
              <span>
                Expansion
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "../components/Chats";
import { useDarkMode } from "../context/DarkModeContext";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {
  const { toggleDarkMode } = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode();
  };
  return (
    <div
      id="dark2"
      className="flex-1 bg-[#3e3c61] relative max-w-[100px] sm:max-w-[150px] ms:max-w-[250px]"
    >
      <Navbar />
      <Search />
      <Chats />
      <button
        onClick={toggleMode}
        className="text-[yellow] bg-[black] rounded-[100px] w-[50px] h-[20px] absolute bottom-[30px] left-[5px] ms:bottom-[2px] ms:left-[110px]"
      >
        <p
          style={{
            color: isDarkMode ? "white" : "yellow",
            fontSize: "18px",
            position: "relative",
            transition: "left 1s ease", // Adjust the duration and timing function as needed
            left: isDarkMode ? "30px" : "0px",
          }}
        >
          {isDarkMode ? <FaMoon /> : <IoIosSunny />}
        </p>
      </button>
      <span className="font-bold absolute bottom-[0px] text-[#ddddf7] pl-[7px]">
        Lama Chat
      </span>
    </div>
  );
};

export default Sidebar;

import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "../components/Chats";

const Sidebar = () => {
  return (
    <div className="flex-1 bg-[#3e3c61] relative max-w-[100px] sm:max-w-[150px] ms:max-w-[250px]">
      <Navbar />
      <Search />
      <Chats />
      <span className="font-bold absolute bottom-[0px] text-[#ddddf7] pl-[7px]">
        Lama Chat
      </span>
    </div>
  );
};

export default Sidebar;

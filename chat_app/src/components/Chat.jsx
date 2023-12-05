import { BsCameraVideoFill } from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="flex-auto flex flex-col w-full">
      <div
        id="dark1"
        className={`min-h-[70px] bg-[#5d5b8d] flex items-center justify-between p-[10px] text-[lightgray] `}
      >
        <span className="">{data.user?.displayName}</span>{" "}
        <div className="flex gap-[20px] items-center">
          <BsCameraVideoFill className="cursor-pointer" />
          <MdGroupAdd className="cursor-pointer" />
          <MdMoreHoriz className="cursor-pointer" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;

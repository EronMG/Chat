import { BsCameraVideoFill } from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import Messages from "./Messages";
import Input from "./Input";
import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import Modal from "react-modal";
const Chat = () => {
  const { data } = useContext(ChatContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  console.log("lox", data);
  return (
    <div className="flex-auto flex flex-col w-full">
      <div
        id="dark1"
        className={`min-h-[70px] bg-[#5d5b8d] flex items-center justify-between p-[10px] text-[lightgray] `}
      >
        <span className="" onClick={openModal}>
          {data.user?.displayName}
        </span>{" "}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: { backgroundColor: "rgba(0,0,0, 0.5)" },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
          }}
          className="w-[300px] backdrop-blur-xl border-[1px] bg-opacity-10 bg-[white] outline-none p-[20px] rounded-[10px] h-[240px]"
        >
          <div className="flex flex-col h-full gap-[10px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-between">
                <h2 className="text-[24px] text-[#5d5b8d] font-bold leading-[24px]">
                  {data.user?.displayName}
                </h2>
              </div>
              <img
                src={data.user?.photoURL}
                alt="urPhoto"
                className="w-[100px] h-[100px] object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <span className="text-[20px] text-[#3e3c61]">
                {data.user?.displayName} E-mail:{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-[16px] text-[#3e3c61]"
                  href={`https://mail.google.com/mail/u/0/#inbox?`}
                >
                  {data.user?.email}
                </a>
              </span>
            </div>
          </div>
        </Modal>
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

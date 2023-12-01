import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const [isOwner, setIsOwner] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  return (
    <div
      ref={ref}
      className={` ${
        message.senderId === currentUser.uid
          ? "flex flex-row-reverse gap-[5px] sm:gap-[15px]"
          : "flex gap-[5px] sm:gap-[15px]"
      }`}
    >
      <div className="flex flex-col text-[gray] font-[300] mb-[20px]">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="user"
          className="w-[40px] h-[40px] rounded-[50%] object-cover"
        />
      </div>
      <div
        className={`${
          message.senderId === currentUser.uid
            ? "max-w-[80%] flex flex-col gap-[10px] items-end"
            : "max-w-[80%] flex flex-col gap-[10px] "
        }`}
      >
        <p
          className={` ${
            message.senderId === currentUser.uid
              ? "bg-[#8da4f1] px-[10px] py-[5px] rounded-l-[10px] rounded-br-[10px] text-white max-w-max sm:px-[15px] sm:py-[10px]"
              : "bg-[#7B68EE] px-[20px] py-[10px] rounded-r-[10px] rounded-bl-[10px] max-w-max text-white"
          }`}
        >
          {message.text}
        </p>
        {message.img && (
          <img
            src={message.img}
            alt="user"
            className={`${
              message.senderId === currentUser.uid
                ? "w-[50%] mb-[10px]"
                : "w-[50%] mb-[10px]"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default Message;

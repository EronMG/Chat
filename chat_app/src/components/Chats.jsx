import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(Object.entries(chats));

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="overflow-hidden ">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
            className="p-[10px] flex items-center gap-[10px] text-white cursor-pointer hover:bg-[#2f2d52]"
          >
            <img
              src={chat[1].userInfo.photoURL}
              alt="user"
              className="w-[30px] h-[30px] rounded-[50%] object-cover"
            />
            <div className="">
              <span className="text-[12px] font-[500] sm:text-[18px]">
                {chat[1].userInfo.displayName}
              </span>
              <p className="text-[9px] text-[lightgray] sm:text-[14px]">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;

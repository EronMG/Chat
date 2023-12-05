import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div
      id="dark3"
      className="flex items-center border-b-[0.1px] border-[darkgray] p-[10px] h-[70px] justify-between text-[#ddddf7] relative"
    >
      <div className="flex gap-[30px]">
        <div className="flex gap-[5px]">
          <img
            src={currentUser.photoURL}
            alt="user"
            className="bg-[#ddddf7] h-[24px] w-[24px] rounded-[50%] object-cover"
          />
          <span>{currentUser.displayName}</span>
        </div>
        <button
          onClick={() => signOut(auth)}
          className="text-[#ddddf7] text-[10px] bg-[#5d5b8d] border-none cursor-pointer px-[10px] absolute bottom-[0] sm:static left-[20px]"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

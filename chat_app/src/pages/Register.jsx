import { LuImagePlus } from "react-icons/lu";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
              password,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#a7bcff]">
      <div className="flex flex-col justify-center items-center bg-white px-[60px] py-[20px] rounded-[10px] gap-[10px]">
        <span className="text-[#5b5b8d] text-[24px] font-bold">Lama Chat</span>
        <span className="text-[#5b5b8d] text-[12px]">Register</span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
          <input
            type="text"
            placeholder="display name"
            name="text"
            id="text"
            className="RegisterInput"
          />
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
            className="RegisterInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            className="RegisterInput"
          />
          <input type="file" id="file" className="hidden" />
          <label
            htmlFor="file"
            className="flex items-center text-[#5b5b8d] gap-[20px]"
          >
            <LuImagePlus className="text-[40px] text-[#5b5b8d] " /> Add an
            avatar
          </label>
          <button className="bg-[#7b96ec] text-white font-bold px-[10px] py-[10px] border-none cursor:pointer">
            Sign Up
          </button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p className="text-[#5b5b8d] text-[12px] mt-[10px]">
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

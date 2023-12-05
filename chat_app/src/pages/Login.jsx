import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);

  const navigate = useNavigate();
  console.log(err);

  // useMemo
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (err) {
        setErr(true);
      }
    },
    [navigate]
  );

  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#a7bcff]">
      <div className="flex flex-col justify-center items-center bg-white px-[60px] py-[20px] rounded-[10px] gap-[10px]">
        <span className="text-[#5b5b8d] text-[24px] font-bold">Lama Chat</span>
        <span className="text-[#5b5b8d] text-[12px]">Login</span>
        <form
          action=""
          className="flex flex-col gap-[15px]"
          onSubmit={handleSubmit}
        >
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
            name="email"
            className="RegisterInput"
          />
          <button className="bg-[#7b96ec] text-white font-bold px-[10px] py-[10px] border-none cursor:pointer">
            Sign in
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className="text-[#5b5b8d] text-[12px] mt-[10px]">
          You do have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

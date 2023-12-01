import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#a7bcff]">
      <div className="border-[1px] border-white rounded-[10px] w-[90%]  sm:w-[65%] h-[80%] flex overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;

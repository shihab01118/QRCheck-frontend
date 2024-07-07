import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <section className="flex">
      <div className="max-w-fit w-full overflow-y-auto ">
      <Sidebar />
      </div>
      <div className="px-5 py-3 bg-[#F5F8FA] w-full h-screen overflow-y-auto">
      <Outlet />
      </div>
    </section>
  );
};

export default MainLayout;

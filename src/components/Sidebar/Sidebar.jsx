import { NavLink } from "react-router-dom";
import QRIcon from "../../assets/qricon_white.svg";
import { FaHome } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";

import "./Sidebar.css";

const Sidebar = () => {
  const navItems = (
    <>
      <NavLink to="/" className="flex items-center gap-2.5 px-3 py-2">
        <FaHome className="text-xl" /> <span className="font-medium">Home</span>
      </NavLink>
      <NavLink
        to="upload_product"
        className="flex items-center gap-2.5 px-3 py-2"
      >
        <HiViewGridAdd className="text-xl" />{" "}
        <span className="font-medium">Upload Product</span>
      </NavLink>
    </>
  );

  return (
    <nav className="w-[280px] py-3 min-h-screen bg-[#0d808f]">
      <div className="flex gap-1.5  pl-4">
        <img src={QRIcon} alt="qr-icon" className="w-10" />
        <span className="text-3xl font-bold text-white">QR Check</span>
      </div>
      <hr className="my-2 border-[#3f8e99]" />
      <div className="flex flex-col pl-4 text-white">{navItems}</div>
    </nav>
  );
};

export default Sidebar;

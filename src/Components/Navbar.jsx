import { Link, Outlet } from "react-router";
import { FaHome } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16">
      <div className="py-2 flex justify-center md:justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hidden md:inline text-green-500"
        >
          Erneste
        </Link>
        <div className="space-x-6 flex">
          <div className="flex gap-1 items-center">
            <FaHome className="text-blue-500"/>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <IoIosPerson className="text-blue-500"/>
            <Link to="about" className="hover:text-blue-400">
              About me
            </Link>
          </div>
         
          <div className="flex gap-1 items-center">
            <RiContactsFill className="text-blue-500"/>
            <Link to="contact" className="hover:text-blue-400">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <Link
            to="/contacts"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        px-4 py-2 rounded-full"
          >
            contact me
          </Link>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;

import { navLinks } from "../../constants/links";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white justify-between">
      <div className="flex justify-center items-center gap-4">
        <img className="h-14 w-14 object-cover" src={logo} />
        <h1 className="text-lg font-bold">CookSmart</h1>
      </div>
      <div className="flex gap-4 sm:gap-6 items-center max-sm:justify-center">
        {navLinks.map((link) => (
          <Link
            className="hidden sm:block text-sm font-medium hover:underline underline-offset-4"
            to={link.link}
          >
            {link.name}
          </Link>
        ))}
        <button className="px-2 sm:px-4 py-2 rounded-md text-black bg-white">
          Sign In
        </button>
        <button className="sm:hidden  items-center">
          <IoMdMenu className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

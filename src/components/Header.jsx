import { useContext, useEffect, useState } from "react";

// import contexts
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/logoBun.png";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount, setItemAmount } = useContext(CartContext);
  // event listener to change top when scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container justify-between h-full mx-auto items-center  flex ">
        {/* Logo */}
        <Link to={"/"}>
          <div className="w-[50px]">
            <img
              src={Logo}
              alt="Logo"
            />
          </div>
        </Link>

        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineDown } from "react-icons/ai";

const navbar = () => {
  return (
    <div className="navbar flex justify-between items-center px-4 py-2">
      <div className="flex justify-center items-center md:order-2">
        <div className="hamburger md:hidden">
          <RxHamburgerMenu cursor="pointer" />
        </div>
        <div className="search px-4 md:hidden md:px-0">
          <FaSearch />
        </div>
      </div>
      <div className="logo text-center md:order-1 flex">Microsoft
      <div className="microsoft-features hidden md:block">
        <ul className="flex px-2">
          <li className="px-2">Microsoft 365</li>
          <li className="px-2">Teams</li>
          <li className="px-2">Windows</li>
          <li className="px-2">Surface</li>
          <li className="px-2">Xbox</li>
          <li className="px-2">Support</li>
        </ul>
      </div>
      </div>
      <div className="cart text-center flex justify-center items-center md:order-3">
        <div className="search hidden md:block pr-4">
          <div className="flex justify-center items-center">
          <div className="hidden md:block px-2">All Microsoft</div>
          <AiOutlineDown />
          </div>
        </div>
        <div className="search hidden md:block pr-4">
          <div className="flex justify-center items-center">
          <div className="hidden md:block px-2">Search</div>
          <FaSearch />
          </div>
        </div>
        <div className="pr-4">
          <div className="flex justify-center items-center">
          <div className="hidden md:block px-2">Cart</div>
          <BsCart3 size="20"></BsCart3>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
          <div className="hidden md:block px-2">Signin</div>
          <VscAccount size="20"></VscAccount>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;

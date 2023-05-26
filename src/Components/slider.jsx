import React from "react";
import Card from "../Components/card.jsx";
import Footer from "./footer.jsx";
import Xbox from "../xbox.png";
import { FaMicrosoft } from "react-icons/fa";
import { MdOutlineLaptopMac } from "react-icons/md";
import { BsXbox } from "react-icons/bs";
import { AiFillWindows } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const slider = () => {
  return (
    <>
      <div className="slider flex flex-col-reverse md:flex-row items-center md:bg-[rgb(197,225,250)]">
        <div className="left px-4 py-4">
          <h2 className="heading text-3xl ">Microsoft 365</h2>
          <p className="py-4 text-1xs text-gray-500 ">
            Turn your ideas into reality, stay safer online and off, and focus
            on what matters most with Microsoft 365 apps.
          </p>
          <button className="button bg-blue-500 px-4 py-2 rounded-sm text-white font-bold">
            Explore More
          </button>
        </div>
        <dic className="right">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP1-539x440"
            alt="NoImg"
            className="w-full"
          ></img>
        </dic>
      </div>
      <div className="promo md:flex justify-center items-center p-10">
        <div className="item p-6 md:px-8">
          <div className="flex justify-center items-center">
            <FaMicrosoft size={60}></FaMicrosoft>
          </div>
          <h1 className="text-center py-2 text-xl text-blue-500">
            Choose your Microsoft 365
          </h1>
        </div>
        <div className="item p-6 md:px-8">
          <div className="flex justify-center items-center">
            <MdOutlineLaptopMac size={60}></MdOutlineLaptopMac>
          </div>
          <h1 className="text-center py-2 text-xl text-blue-500">
            Explore Surface Device
          </h1>
        </div>
        <div className="item p-6 md:px-8">
          <div className="flex justify-center items-center">
            <BsXbox size={60}></BsXbox>
          </div>
          <h1 className="text-center py-2 text-xl text-blue-500">
            Buy Xbox games
          </h1>
        </div>
        <div className="item p-6 md:px-8">
          <div className="flex justify-center items-center">
            <AiFillWindows size={60}></AiFillWindows>
          </div>
          <h1 className="text-center py-2 text-xl text-blue-500">
            Get windows 11
          </h1>
        </div>
      </div>
      <div className="cards flex flex-wrap justify-center items-center">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="buynow flex flex-wrap justify-center items-center my-20">
        <img src={Xbox} alt="noIng" className="px-8"></img>
        <div className="py-8 md:px-8">
          <h1 className="text-4xl md:text-8xl">Xbox Series X</h1>
          <p className="text-xl py-4">The fastest, most powerful Xbox ever</p>
          <button className="font-bold text-white bg-blue-500 p-4 rounded-sm">
            Shop Xbox Series X
          </button>
        </div>
      </div>
      <div className="business">
        <h1 className="p-4 text-6xl">For business</h1>
        <div className="cards flex flex-wrap justify-center items-center">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <div className="links flex items-center p-6">
        <h1 className="text-sm md:text-xl pr-7">Follow Microsoft </h1>
        <BsFacebook size={60} className="pr-7"/>
        <BsTwitter size={60} className="pr-7"/>
        <BsInstagram size={60} className="pr-7"/>
      </div>
      <Footer></Footer>
    </>
  );
};

export default slider;

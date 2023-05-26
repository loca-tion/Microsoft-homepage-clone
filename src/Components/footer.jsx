import React from "react";

const footer = () => {
  return (
    <>
    <div className="footer flex-col p-4 bg-[#f2f2f2] md:flex md:flex-row ">
      <div className="new py-4 md:px-5">
        <h1 className="py-4 text-gray-800">What's New</h1>
        <ul className="text-gray-600">
          <li className="py-2">Microsoft 365</li>
          <li className="py-2">Games</li>
          <li className="py-2">Surface Pro 9</li>
          <li className="py-2">Surface Laptop 5</li>
          <li className="py-2">Surface Laptop Studio</li>
          <li className="py-2">Surface Laptop Go 2</li>
          <li className="py-2">Windows 11 apps</li>
        </ul>
      </div>
      <div className="Microsoft py-4 md:px-5">
        <h1 className="py-4 text-gray-800">Microsoft Store</h1>
        <ul className="text-gray-600">
          <li className="py-2">Account Profile</li>
          <li className="py-2">Download center</li>
          <li className="py-2">Microsoft Store Support</li>
          <li className="py-2">Returns</li>
          <li className="py-2">Order Tracking</li>
        </ul>
      </div>
      <div className="Education py-4 md:px-5">
        <h1 className="py-4 text-gray-800">Education</h1>
        <ul className="text-gray-600">
          <li className="py-2">Microsoft in education</li>
          <li className="py-2">Devices for education</li>
          <li className="py-2">Microsoft Teams for Education</li>
          <li className="py-2">Microsoft 365 Education</li>
          <li className="py-2">Office Education</li>
          <li className="py-2">Educator training and development</li>
          <li className="py-2">Deals for students and parents</li>
          <li className="py-2">Azure for students</li>
        </ul>
      </div>
      <div className="Business py-4 md:px-5">
        <h1 className="py-4 text-gray-800">Business</h1>
        <ul className="text-gray-600">
          <li className="py-2">Microsoft Cloud</li>
          <li className="py-2">Microsoft Security</li>
          <li className="py-2">Azure</li>
          <li className="py-2">Dynamics 365</li>
          <li className="py-2">Microsoft 365</li>
          <li className="py-2">Microsoft Advertising</li>
          <li className="py-2">Microsoft Industry</li>
          <li className="py-2">Microsoft Teams</li>
        </ul>
      </div>
      <div className="developer py-4 md:px-5">
        <h1 className="py-4 text-gray-800">Developer & IT</h1>
        <ul className="text-gray-600">
          <li className="py-2">Developer Center</li>
          <li className="py-2">Documentation</li>
          <li className="py-2">Microsoft Learn</li>
          <li className="py-2">Microsoft Tech Community</li>
          <li className="py-2">Azure Marketplace</li>
          <li className="py-2">AppSource</li>
          <li className="py-2">Microsoft Power Platform</li>
          <li className="py-2">Visual Studio</li>
        </ul>
      </div>
      <div className="Company py-4 md:px-5">
        <h1 className="py-4 text-gray-800">Company</h1>
        <ul className="text-gray-600">
          <li className="py-2">Careers</li>
          <li className="py-2">About Microsoft</li>
          <li className="py-2">Company news</li>
          <li className="py-2">Privacy at Microsoft</li>
          <li className="py-2">Investors</li>
          <li className="py-2">Security</li>
          <li className="py-2">Sustainability</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default footer;

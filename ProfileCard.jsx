import React from "react";
import { FaStar } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src="/Image5.jpg"
          alt="Bird"
          className="w-full h-60 object-cover"
        />
        <div className="absolute bottom-4 left-4 flex items-center space-x-3">
          <div className="w-14 h-14 bg-gray-200 rounded-full"></div>{" "}
          <div>
            <h2 className="font-bold text-white text-lg">Eli Shop</h2>
            <div className="flex items-center text-yellow-400 text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="w-full h-24 bg-gray-200 rounded"></div>
          <div className="w-full h-24 bg-gray-200 rounded"></div>
          <div className="w-full h-24 bg-gray-200 rounded"></div>
          <div className="w-full h-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

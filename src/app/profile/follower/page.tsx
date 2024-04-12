"use client";
import { User } from "lucide-react";
import { useState } from "react";

const Follower = () => {
  const [selectedValue, setSelectedValue] = useState<string>("myFollowers");
  // bg-customGreen px-4 py-3 rounded-md cursor-pointer
  return (
    <div className="flex flex-col">
      <div className="border-b border-green-200 py-5 px-8 flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <User className="text-customGreen" size={32} />
          <h1 className="text-xl font-bold">My Followers</h1>
        </div>
        <div className="flex items-center gap-x-4">
          <div
            className={`px-4 py-3 rounded-md cursor-pointer ${
              selectedValue === "myFollowers"
                ? "bg-customGreen"
                : "border border-customGreen"
            }`}
            onClick={() => setSelectedValue("myFollowers")}
          >
            <h1
              className={`${
                selectedValue === "myFollowers"
                  ? "text-white"
                  : "text-customGreen"
              }`}
            >
              My Followers
            </h1>
          </div>
          <div
            className={`px-4 py-3 rounded-md cursor-pointer ${
              selectedValue === "followers"
                ? "bg-customGreen"
                : "border border-customGreen"
            }`}
            onClick={() => setSelectedValue("followers")}
          >
            <h1
              className={`${
                selectedValue === "followers"
                  ? "text-white"
                  : "text-customGreen"
              }`}
            >
              Followings
            </h1>
          </div>
        </div>
      </div>
      <div>CONTINUE FROM THIS</div>
    </div>
  );
};
export default Follower;

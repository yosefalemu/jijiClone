"use client";
import FollowersList from "@/components/FollowersList";
import FollowingList from "@/components/FollowingList";
import { User, UserCheck } from "lucide-react";
import { useState } from "react";

const Follower = () => {
  const [selectedValue, setSelectedValue] = useState<string>("myFollowers");

  return (
    <div className="flex flex-col px-8">
      <div className="border-b border-green-200 py-8 flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <User className="text-customGreen" size={32} />
          <h1 className="hidden md:block text-xl font-bold">Followers</h1>
        </div>
        <div className="flex items-center gap-x-4">
          <div
            className={`px-2 py-1 md:px-4 md:py-3 rounded-md cursor-pointer flex items-center gap-x-2 ${
              selectedValue === "myFollowers"
                ? "bg-customGreen"
                : "border border-customGreen"
            }`}
            onClick={() => setSelectedValue("myFollowers")}
          >
            <User
              className={`${
                selectedValue === "myFollowers"
                  ? "text-white"
                  : "text-customGreen"
              }`}
            />
            <h1
              className={`hidden xl:block ${
                selectedValue === "myFollowers"
                  ? "text-white"
                  : "text-customGreen"
              }`}
            >
              My Followers
            </h1>
          </div>
          <div
            className={`px-2 py-1 md:px-4 md:py-3 rounded-md cursor-pointer flex items-center gap-x-2 ${
              selectedValue === "followers"
                ? "bg-customGreen"
                : "border border-customGreen"
            }`}
            onClick={() => setSelectedValue("followers")}
          >
            <UserCheck
              className={`${
                selectedValue === "followers"
                  ? "text-white"
                  : "text-customGreen"
              }`}
            />
            <h1
              className={`hidden xl:block ${
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
      <div className="py-8">
        {selectedValue === "myFollowers" ? (
          <FollowersList />
        ) : (
          <FollowingList />
        )}
      </div>
    </div>
  );
};
export default Follower;

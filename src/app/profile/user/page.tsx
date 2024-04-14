"use client";
import { ChevronLeft, CircleUser, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Profile = () => {
  const numberValue = 453;
  const [inviteLink, setInviteLink] = useState<boolean>(false);
  return (
    <div className="px-8">
      <div className="py-5 border-b border-green-200">
        <div className="flex items-center gap-x-4">
          <CircleUser className="text-customGreen" size={32} />
          <h1 className="hidden md:block text-xl font-bold">Profile Status</h1>
        </div>
      </div>
      <div className="py-8 grid grid-cols-12 gap-4 border-b border-green-200">
        <div className="col-span-6 mx-auto bg-customGreen text-white py-4 px-10 rounded-md cursor-pointer hover:bg-green-700 w-full md:w-4/5 flex justify-center text-center">
          <h1 className="text-sm md:text-xl">{`Followers ${numberValue}`}</h1>
        </div>
        <div className="col-span-6 mx-auto bg-customGreen text-white py-4 px-10 rounded-md cursor-pointer hover:bg-green-700 w-full md:w-4/5 flex justify-center text-center">
          <h1 className="text-sm md:text-xl">{`Following ${numberValue}`}</h1>
        </div>
        <div className="col-span-6 mx-auto bg-customGreen text-white py-4 px-10 rounded-md cursor-pointer hover:bg-green-700 w-full md:w-4/5 flex justify-center text-center">
          <h1 className="text-sm md:text-xl">{`Adverts ${numberValue}`}</h1>
        </div>
        <div className="col-span-6 mx-auto bg-customGreen text-white py-4 px-10 rounded-md cursor-pointer hover:bg-green-700 w-full md:w-4/5 flex justify-center text-center">
          <h1 className="text-sm md:text-xl">{`Feedbacks ${numberValue}`}</h1>
        </div>
      </div>
      {inviteLink ? (
        <div className="py-8">
          <div className="flex items-center gap-4 pb-4">
            <div
              className="h-12 w-12 rounded-full bg-customGreen hover:bg-green-700 flex items-center justify-center p-1 cursor-pointer"
              onClick={() => setInviteLink(false)}
            >
              <ChevronLeft className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-customGreen text-lg">Invite your friends</h1>
            </div>
          </div>
          <div className="border-t border-green-200">
            <div className="flex flex-col gap-y-4">
              <div className="border-b border-green-200 py-3 flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className="relative h-16 w-16 m-0 p-0">
                    <Image
                      src={"/Icons/facebook.png"}
                      fill
                      alt="FACEBOOK"
                      className="object-contain"
                    />
                  </div>
                  <h1 className="text-xl">Facebook</h1>
                </div>
                <div className="border border-white rounded-3xl flex items-center justify-center px-6 py-1 bg-customGreen hover:bg-green-700 cursor-pointer">
                  <h1 className="text-white text-lg">Invite</h1>
                </div>
              </div>
              <div className="border-b border-green-200 py-3 flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className="relative h-16 w-16 m-0 p-0">
                    <Image
                      src={"/Icons/whatapp.png"}
                      fill
                      alt="WHATAPP"
                      className="object-contain"
                    />
                  </div>
                  <h1 className="text-xl">Whatapp</h1>
                </div>
                <div className="border border-white rounded-3xl flex items-center justify-center px-6 py-1 bg-customGreen hover:bg-green-700 cursor-pointer">
                  <h1 className="text-white text-lg">Invite</h1>
                </div>
              </div>
              <div className="border-b border-green-200 py-3 flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className="relative h-16 w-16 m-0 p-0">
                    <Image
                      src={"/Icons/linkedin.png"}
                      fill
                      alt="LINKEDIN"
                      className="object-contain"
                    />
                  </div>
                  <h1 className="text-xl">Linkedin</h1>
                </div>
                <div className="border border-white rounded-3xl flex items-center justify-center px-6 py-1 bg-customGreen hover:bg-green-700 cursor-pointer">
                  <h1 className="text-white text-lg">Invite</h1>
                </div>
              </div>
              <div className="border-b border-green-200 py-3 flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className="relative h-16 w-16 m-0 p-0">
                    <Image
                      src={"/Icons/instagram.png"}
                      fill
                      alt="INSTAGRAM"
                      className="object-contain"
                    />
                  </div>
                  <h1 className="text-xl">Instagram</h1>
                </div>
                <div className="border border-white rounded-3xl flex items-center justify-center px-6 py-1 bg-customGreen hover:bg-green-700 cursor-pointer">
                  <h1 className="text-white text-lg">Invite</h1>
                </div>
              </div>
              <div className="border-b border-green-200 py-3 flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className="relative h-16 w-16 m-0 p-0">
                    <Image
                      src={"/Icons/twitter.png"}
                      fill
                      alt="INSTAGRAM"
                      className="object-contain"
                    />
                  </div>
                  <h1 className="text-xl">Twitter</h1>
                </div>
                <div className="border border-white rounded-3xl flex items-center justify-center px-6 py-1 bg-customGreen hover:bg-green-700 cursor-pointer">
                  <h1 className="text-white text-lg">Invite</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8 flex items-center gap-4">
          <div
            className="h-12 w-12 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center p-1 cursor-pointer"
            onClick={() => setInviteLink(true)}
          >
            <Send className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-orange-500 text-lg">
              Invite your friends to jojo
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;

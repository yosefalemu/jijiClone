"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useStore } from "@/hooks";
import { Hand, PencilLine } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ContactDetails = () => {
  const [birthday, setBirthday] = useState<boolean>(false);
  const testData = [
    "Dessie",
    "Addis Ababa",
    "Adama",
    "Kombolcha",
    "Moyale",
    "Gonder",
  ];
  const genderList = [
    { label: "Do not specify" },
    { label: "Male" },
    { label: "Female" },
  ];
  const { changeScrollDirection } = useStore();
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const newDirection = scrollY > lastScrollY ? "down" : "up";
      setScrollDirection(newDirection);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  useEffect(() => {
    changeScrollDirection(scrollDirection);
  }, [scrollDirection]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-x-4 px-4 py-4 border-b border-green-100">
        <h1 className="text-xl">Personal details</h1>
        <div className="border border-white rounded-3xl flex items-center justify-center px-6 py-1 bg-customGreen hover:bg-green-700 cursor-pointer">
          <h1 className="text-white text-lg">Saved</h1>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-y-4">
          <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-green-500">
            <Image
              fill
              src="https://avatars.githubusercontent.com/u/125744573?v=4"
              alt="USERPROFILE"
            />
            <div className="absolute right-5 bottom-1 bg-gray-200 rounded-full p-1">
              <PencilLine className="text-black cursor-pointer" />
            </div>
          </div>
          <div className="w-[90%] sm:w-3/4 flex flex-col gap-y-6 py-4">
            <div>
              <Input
                placeholder="First Name*"
                className="py-7 rounded-lg text-lg focus-visible:ring-green-500"
              />
            </div>
            <div>
              <Input
                placeholder="Last Name*"
                className="py-7 rounded-lg text-lg focus-visible:ring-green-500"
              />
            </div>
            <div>
              <Input
                placeholder="Select Location*"
                className="py-7 rounded-lg text-lg focus-visible:ring-green-500"
                list="cities"
              />
              <datalist id="cities">
                {testData?.map((item, index) => (
                  <option key={index} value={item} />
                ))}
              </datalist>
            </div>
            <div>
              <Input
                placeholder="Birthday*"
                className="py-7 rounded-lg text-lg focus-visible:ring-green-500"
                type={birthday ? "date" : ""}
                onFocus={() => setBirthday(true)}
              />
            </div>
            <div>
              <div>
                <Input
                  placeholder="Sex*"
                  className="py-7 rounded-lg text-lg focus-visible:ring-green-500"
                  list="gender"
                />
                <datalist id="gender">
                  {genderList?.map((item, index) => (
                    <option key={index} value={item.label} />
                  ))}
                </datalist>
              </div>
            </div>
            <div>
              <div className="bg-slate-400 md:flex items-center gap-x-4 rounded-lg p-4">
                <Hand size={42} className="hidden md:block" />
                <h1>
                  Connect your social media accounts for smoother experience!
                </h1>
              </div>
            </div>
            <div className="border-t border-slate-200 flex items-center justify-between py-4">
              <div className="flex items-center gap-x-10 flex-1">
                <div className="relative h-12 w-12">
                  <Image
                    fill
                    src={"/Icons/facebook.png"}
                    alt="FACEBOOK"
                    className="object-cover"
                  />
                </div>
                <h1>Google</h1>
              </div>
              <div className="flex-grow flex justify-end">
                <Switch id="google-mode" />
              </div>
            </div>
            <div className="border-t border-slate-200 flex items-center justify-between py-4">
              <div className="flex items-center gap-x-10 flex-1">
                <div className="relative h-12 w-12">
                  <Image
                    fill
                    src={"/Icons/facebook.png"}
                    alt="FACEBOOK"
                    className="object-cover"
                  />
                </div>
                <h1>Facebook</h1>
              </div>
              <div className="flex-grow flex justify-end">
                <Switch id="facebook-mode" />
              </div>
            </div>
            <div className="border-t border-slate-200 flex items-center justify-between py-4">
              <div className="flex items-center gap-x-10 flex-1">
                <div className="relative h-12 w-12">
                  <Image
                    fill
                    src={"/Icons/instagram.png"}
                    alt="Instagram"
                    className="object-cover"
                  />
                </div>
                <h1>Instagram</h1>
              </div>
              <div className="flex-grow flex justify-end">
                <Switch id="instagram-mode" />
              </div>
            </div>
            <div className="border-t border-slate-200 flex items-center justify-between py-4">
              <div className="flex items-center gap-x-10 flex-1">
                <div className="relative h-12 w-12">
                  <Image
                    fill
                    src={"/Icons/linkedin.png"}
                    alt="Linkedin"
                    className="object-cover"
                  />
                </div>
                <h1>Linkedin</h1>
              </div>
              <div className="flex-grow flex justify-end">
                <Switch id="instagram-mode" />
              </div>
            </div>
            <div>
              <Button
                className={buttonVariants({
                  size: "lg",
                  className: "w-full bg-customGreen hover:bg-green-900",
                })}
              >
                Saved
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;

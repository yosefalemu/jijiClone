"use client";
import MainContent from "@/components/MainContent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SideBarForSmallScreen from "@/components/SideBarSmallScreen";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const country = "Ethiopia";
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);
  console.log("SCROLL", scrollDirection);

  return (
    <>
      <div className="bg-customGreen w-full h-[250px] inset-0">
        <MaxWidthWrapper className="h-full">
          <div className="h-full flex flex-col items-center justify-evenly">
            <div className="md:flex items-center gap-4">
              <h1 className="text-3xl text-white text-center">
                Find anything in
              </h1>
              <h1 className="text-3xl text-white uppercase text-center">
                {country}
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 w-full sm:w-3/4 lg:w-5/12 relative">
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                <Search
                  size={22}
                  className="text-gray-500 cursor-pointer"
                  strokeWidth={5}
                />
              </div>
              <Input
                placeholder="I am looking for..."
                className="py-7 rounded-lg text-lg focus-visible:ring-green-500"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-gray-200 h-fit py-3">
        <MaxWidthWrapper>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 xl:col-span-3">
              <Sidebar />
              <SideBarForSmallScreen />
            </div>
            <div className="col-span-12 xl:col-span-9">
              <MainContent />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
}

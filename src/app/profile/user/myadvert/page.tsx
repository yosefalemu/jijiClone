"use client";
import AdvertList from "@/components/AdvertList";
import { Button, buttonVariants } from "@/components/ui/button";
import { LayoutList } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const MyAdvert = () => {
  const hasItem = false;
  return (
    <div className="flex flex-col px-8">
      <div className="border-b border-green-200 py-8">
        <div className="flex items-center gap-x-4">
          <LayoutList className="text-customGreen" size={32} />
          <h1 className="hidden md:block text-xl font-bold">Adverts</h1>
        </div>
      </div>
      <div className="border-b border-green-200 py-8">
        <div className="flex items-center justify-center">
          {hasItem ? (
            <AdvertList />
          ) : (
            <div className="flex flex-col items-center justify-center gap-y-6">
              <div className="relative h-32 w-32 lg:h-64 lg:w-80">
                <Image fill src={"/Svgs/noItem.svg"} alt="No Item" />
              </div>
              <h1 className="text-lg lg:text-xl xl:text-2xl text-red-500">
                There are no adverts yet.
              </h1>
              <Button
                className={buttonVariants({
                  size: "lg",
                  className: "bg-customGreen hover:bg-green-700 py-6 w-full",
                })}
              >
                Add Item
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MyAdvert;

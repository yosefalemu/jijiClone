import { Search } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";

const FollowersList = () => {
  const hasItem = false;
  return (
    <>
      {hasItem ? (
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-center gap-2 w-full relative">
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
              <Search
                size={22}
                className="text-gray-500 cursor-pointer"
                strokeWidth={5}
              />
            </div>
            <Input
              placeholder="Type your search here"
              className="px-14 py-7 rounded-lg text-lg focus-visible:ring-green-500"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center justify-between">
              <div className="relative">Image</div>
              <div>
                <h1>Yosef Alemu</h1>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative">Image</div>
              <div>
                <h1>Yosef Alemu</h1>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative">Image</div>
              <div>
                <h1>Yosef Alemu</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col gap-y-4">
          <div className="relative h-32 w-32">
            <Image fill src={"/Icons/nofollower.png"} alt="NOFOLLOWERS" />
          </div>
          <h1 className="text-lg xl:text-2xl text-red-500">No followers</h1>
          <Button
            className={buttonVariants({
              size: "lg",
              className: "bg-customGreen hover:bg-green-700 py-6 w-full",
            })}
          >
            Add a follower
          </Button>
        </div>
      )}
    </>
  );
};

export default FollowersList;

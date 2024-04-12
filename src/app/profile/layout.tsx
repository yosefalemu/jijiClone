import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  CalendarRange,
  CircleHelp,
  MessageCircleCode,
  Settings,
  SquareUser,
} from "lucide-react";
import Image from "next/image";

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="mt-10">
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 rounded-lg flex flex-col gap-y-4">
            <div className="bg-white h-fit flex flex-col gap-y-2 rounded-tl-2xl rounded-tr-2xl overflow-hidden">
              <div className="w-full flex justify-end cursor-pointer">
                <div className="flex items-center gap-2 hover:bg-gray-300 p-4">
                  <h1 className="uppercase text-xs font-bold">Settings</h1>
                  <Settings />
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-customGreen">
                  <Image
                    fill
                    src={
                      "https://avatars.githubusercontent.com/u/125744573?v=4"
                    }
                    alt="PROFILEIMAGE"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center">
                <h1 className="text-2xl">Yosef Alemu</h1>
              </div>
              <div className="w-full flex justify-center">
                <h1 className="text-gray-500">0941039808</h1>
              </div>
              <div className="border-t border-green-200 mt-2">
                <div className="flex items-center justify-start gap-x-1">
                  <div className="relative h-16 w-16">
                    <Image
                      src={"/Icons/Ecommerce_06.png"}
                      fill
                      alt="MAKEMONEY"
                      className="object-contain"
                    />
                  </div>
                  <h1 className="text-sm font-semibold cursor-pointer hover:text-customGreen">
                    Make Money
                  </h1>
                </div>
              </div>
            </div>
            <div className="bg-white h-fit flex flex-col gap-y-2 py-2">
              <div className="flex items-center gap-x-4 py-4  px-5  border-b border-green-200">
                <SquareUser />
                <h1 className="text-sm font-semibold cursor-pointer hover:text-customGreen">
                  Followers
                </h1>
              </div>
              <div className="flex items-center gap-x-4 py-4  px-5  border-b border-green-200">
                <CalendarRange />
                <h1 className="text-sm font-semibold cursor-pointer hover:text-customGreen">
                  My adverts
                </h1>
              </div>
              <div className="flex items-center gap-x-4 py-4 px-5">
                <MessageCircleCode />
                <h1 className="text-sm font-semibold cursor-pointer hover:text-customGreen">
                  Feedback
                </h1>
              </div>
            </div>
            <div className="bg-white h-fit flex items-center gap-x-4 py-4 px-5 rounded-bl-2xl rounded-br-2xl">
              <CircleHelp />
              <h1 className="text-sm font-semibold cursor-pointer hover:text-customGreen">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
          <div className="col-span-8 rounded-lg bg-white h-fit">{children}</div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default ProfileLayout;

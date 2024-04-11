import { CirclePlus } from "lucide-react";
import Link from "next/link";
import MainBottom from "./MainBottom";

const MainContent = () => {
  return (
    <div className="h-full flex flex-col gap-8">
      <div className="hidden xl:block">
        <div className="grid grid-cols-12 gap-3 h-56">
          <div className="col-span-9 relative">
            <Link href={"/howTobuy"}>
              <div className="absolute inset-0 bg-main-container-image h-full w-full bg-contain bg-center bg-no-repeat"></div>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(34, 197, 94, 0.6) 100%)",
                }}
              ></div>
            </Link>
          </div>
          <div className="col-span-3 bg-orange-500 hover:bg-orange-600">
            <div className="p-4 text-center text-2xl font-medium flex items-center justify-center flex-col gap-3">
              <h1 className="text-white">Got something to sell?</h1>
              <CirclePlus size={60} color="white" className="cursor-pointer" />
              <p className="text-sm text-white">Post an advert here?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <>
          <h1 className="text-2xl text-gray-600 font-semibold mb-6">
            Trending ads
          </h1>
          <MainBottom />
        </>
      </div>
    </div>
  );
};
export default MainContent;

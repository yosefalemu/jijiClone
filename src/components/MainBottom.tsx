import { File } from "lucide-react";
import Image from "next/image";

const MainBottom = () => {
  const price = 90000;
  return (
    <div className="grid grid-cols-12 gap-x-2 gap-y-4">
      <div className="col-span-6 md:col-span-4 lg:col-span-3 h-60 shadow-sm shadow-gray-700 rounded-sm">
        <div className="relative h-[65%] w-full">
          <Image
            fill
            src={"/Icons/Ecommerce_1.png"}
            alt="Product image"
            className="object-contain"
          />
        </div>
        <div className="bg-white h-[35%] px-2 py-4 flex flex-col justify-between relative rounded-sm">
          <h1 className="text-black text-sm pt-2">
            Apple iPhone 11 128 GB Gray
          </h1>
          <p className="text-sm text-green-500">{`ETB ${price}`}</p>
          <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center absolute right-2 -top-4">
            <File size={16} className="text-green-500" />
          </div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-4 lg:col-span-3 h-60 shadow-sm shadow-gray-700 rounded-sm">
        <div className="relative h-[65%] w-full">
          <Image
            fill
            src={"/Icons/Ecommerce_1.png"}
            alt="Product image"
            className="object-contain"
          />
        </div>
        <div className="bg-white h-[35%] px-2 py-4 flex flex-col justify-between relative rounded-sm">
          <h1 className="text-black text-sm pt-2">
            Apple iPhone 11 128 GB Gray
          </h1>
          <p className="text-sm text-green-500">{`ETB ${price}`}</p>
          <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center absolute right-2 -top-4">
            <File size={16} className="text-green-500" />
          </div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-4 lg:col-span-3 h-60 shadow-sm shadow-gray-700 rounded-sm">
        <div className="relative h-[65%] w-full">
          <Image
            fill
            src={"/Icons/Ecommerce_1.png"}
            alt="Product image"
            className="object-contain"
          />
        </div>
        <div className="bg-white h-[35%] px-2 py-4 flex flex-col justify-between relative rounded-sm">
          <h1 className="text-black text-sm pt-2">
            Apple iPhone 11 128 GB Gray
          </h1>
          <p className="text-sm text-green-500">{`ETB ${price}`}</p>
          <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center absolute right-2 -top-4">
            <File size={16} className="text-green-500" />
          </div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-4 lg:col-span-3 h-60 shadow-sm shadow-gray-700 rounded-sm">
        <div className="relative h-[65%] w-full">
          <Image
            fill
            src={"/Icons/Ecommerce_1.png"}
            alt="Product image"
            className="object-contain"
          />
        </div>
        <div className="bg-white h-[35%] px-2 py-4 flex flex-col justify-between relative rounded-sm">
          <h1 className="text-black text-sm pt-2">
            Apple iPhone 11 128 GB Gray
          </h1>
          <p className="text-sm text-green-500">{`ETB ${price}`}</p>
          <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center absolute right-2 -top-4">
            <File size={16} className="text-green-500" />
          </div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-4 lg:col-span-3 h-60 shadow-sm shadow-gray-700 rounded-sm">
        <div className="relative h-[65%] w-full">
          <Image
            fill
            src={"/Icons/Ecommerce_1.png"}
            alt="Product image"
            className="object-contain"
          />
        </div>
        <div className="bg-white h-[35%] px-2 py-4 flex flex-col justify-between relative rounded-sm">
          <h1 className="text-black text-sm pt-2">
            Apple iPhone 11 128 GB Gray
          </h1>
          <p className="text-sm text-green-500">{`ETB ${price}`}</p>
          <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center absolute right-2 -top-4">
            <File size={16} className="text-green-500" />
          </div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-4 lg:col-span-3 h-60 shadow-sm shadow-gray-700 rounded-sm">
        <div className="relative h-[65%] w-full">
          <Image
            fill
            src={"/Icons/Ecommerce_1.png"}
            alt="Product image"
            className="object-contain"
          />
        </div>
        <div className="bg-white h-[35%] px-2 py-4 flex flex-col justify-between relative rounded-sm">
          <h1 className="text-black text-sm pt-2">
            Apple iPhone 11 128 GB Gray
          </h1>
          <p className="text-sm text-green-500">{`ETB ${price}`}</p>
          <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center absolute right-2 -top-4">
            <File size={16} className="text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainBottom;

import { SideBarItems } from "@/config";
import Image from "next/image";

const SideBarForSmallScreen = () => {
  const sideBarItems = [
    { id: 1, name: "Test", image: "/Icons/Ecommerce_0.png" },
  ];
  return (
    <div className="xl:hidden grid grid-cols-12 gap-1">
      {SideBarItems.map((item) => (
        <div
          key={item.id}
          className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 bg-white h-40 p-3 flex flex-col justify-around items-center"
        >
          <div className="relative h-[55%] w-full">
            <Image
              fill
              src={`${item.image}`}
              alt={item.label}
              className="object-contain"
            />
          </div>
          <h1 className="text-sm text-center">{item.label}</h1>
        </div>
      ))}
    </div>
  );
};
export default SideBarForSmallScreen;

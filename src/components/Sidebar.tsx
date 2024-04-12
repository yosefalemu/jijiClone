"use client";
import { SideBarItems } from "@/config";
import { TSidebarSubFeatures } from "@/types";
import { CarFront, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<TSidebarSubFeatures[]>([]);
  const ads = 13;
  useEffect(() => {
    if (hoveredItemId !== null) {
      const foundItem = SideBarItems.find((item) => item.id === hoveredItemId);
      setHoveredItem(foundItem ? foundItem.features : []);
    } else {
      setHoveredItem([]);
    }
  }, [hoveredItemId]);
  return (
    <div className="hidden xl:block relative bg-white p-2 group hover:border-r-2 hover:border-green-500">
      {SideBarItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center pr-2 borde mb-1 h-16  hover:bg-gray-200 cursor-pointer"
          onMouseEnter={() => setHoveredItemId(item.id)}
        >
          <div className="flex flex-grow items-center h-full">
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10">
                <Image
                  fill
                  src={item.image}
                  alt={item.label}
                  className="object-contain"
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-sm text-gray-500">{item.label}</h1>
                <h3 className="text-sm font-semibold text-gray-600">{`${ads} ads`}</h3>
              </div>
            </div>
          </div>
          <ChevronRight />
        </div>
      ))}
      <div className="hidden group-hover:block absolute -right-[101%] top-0 w-full h-full bg-white z-40 p-2 pl-1">
        {hoveredItem.map((item, index) => (
          <div
            key={index}
            className="flex items-center pr-2 mb-1 h-16  hover:bg-gray-200 cursor-pointer"
          >
            <div className="flex items-center gap-4 pl-1">
              <div className="relative w-10 h-10">
                <Image
                  fill
                  src={item.image}
                  alt={item.label}
                  className="object-contain"
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-sm text-gray-500">{item.label}</h1>
                <h3 className="text-sm font-semibold text-gray-600">{`${ads} ads`}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;

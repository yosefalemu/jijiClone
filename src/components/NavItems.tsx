import { NavBarItems } from "@/config";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { List, Save } from "lucide-react";

const NavItems = () => {
  return (
    <>
      <div className="hidden lg:flex items-center gap-4">
        {NavBarItems.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger className="bg-white rounded-full p-2 cursor-pointer">
                <item.icon fill="gray" color="gray" size={18} />
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <div className="lg:hidden">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="bg-white rounded-full p-2 cursor-pointer">
              <List fill="gray" color="gray" size={18} />
            </TooltipTrigger>
            <TooltipContent>My adverts</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};
export default NavItems;

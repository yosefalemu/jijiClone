import { LucideIcon } from "lucide-react";

export type TSidebarSubFeatures = {
  label: string;
  value: string;
  image: string;
};
export interface TNavBarItemsType {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface TSideBarItems {
  id: number;
  label: string;
  value: string;
  image: string;
  features: TSidebarSubFeatures[];
}

export interface TFixedBottomItems {
  label: string;
  value: string;
  icon: LucideIcon;
}

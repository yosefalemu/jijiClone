import { TFixedBottomItems, TNavBarItemsType, TSideBarItems } from "@/types";
import {
  List,
  Home,
  Save,
  Bell,
  MessageSquareText,
  PlusSquare,
  CircleUserRound,
} from "lucide-react";

export const NavBarItems: TNavBarItemsType[] = [
  {
    label: "Saved",
    value: "saved",
    icon: Save,
  },
  {
    label: "Message",
    value: "message",
    icon: MessageSquareText,
  },
  {
    label: "Notification",
    value: "notification",
    icon: Bell,
  },
  {
    label: "My advert",
    value: "myAdvert",
    icon: List,
  },
];

export const FixedFooterItems: TFixedBottomItems[] = [
  { label: "Home", value: "home", icon: Home },
  { label: "Saved", value: "saved", icon: Save },
  { label: "Sell", value: "sell", icon: PlusSquare },
  { label: "Message", value: "message", icon: MessageSquareText },
  { label: "Profile", value: "profile", icon: CircleUserRound },
];

export const SideBarItems: TSideBarItems[] = [
  {
    id: 1,
    label: "Vechiles",
    value: "vechiles",
    image: "/SidebarImages/vehicles.png",
    features: [
      { label: "Cars", value: "cars", image: "/SidebarSubImages/cars.png" },
      {
        label: "Buses & Microbuses",
        value: "busesMicrobuses",
        image: "/SidebarSubImages/buses.png",
      },
      {
        label: "Heavy Equipment",
        value: "heavyEquipment",
        image: "/SidebarSubImages/heavy-equipment.png",
      },
      {
        label: "Motorbikes & Scooters",
        value: "motorBikesScooters",
        image: "/SidebarSubImages/moto.png",
      },
      {
        label: "Trucks & Trailers",
        value: "trucksTrailers",
        image: "/SidebarSubImages/trucks-and-trailers.png",
      },
      {
        label: "Vehicle Parts & Accessories",
        value: "vehiclePartsAccessories",
        image: "/SidebarSubImages/vehicle-parts-and-accessories.png",
      },
      {
        label: "Watercraft & Boats",
        value: "watercraftBoats",
        image: "/SidebarSubImages/watercrafts.png",
      },
    ],
  },
  {
    id: 2,
    label: "Property",
    value: "property",
    image: "/SidebarImages/real-estate.png",
    features: [
      {
        label: "New Builds",
        value: "newBuilds",
        image: "/SidebarSubImages/new-builds.png",
      },
      {
        label: "House & Apartments for Rent",
        value: "houseApartmentsForRent",
        image: "/SidebarSubImages/houses-and-apartments-for-rent.png",
      },
      {
        label: "House & Apartments for Sale",
        value: "houseApartmentsForSale",
        image: "/SidebarSubImages/houses-and-apartments-for-sale.png",
      },
      {
        label: "Land & Plot for Rent",
        value: "landPlotForRent",
        image: "/SidebarSubImages/land-for-rent.png",
      },
      {
        label: "Label & Plots for Sale",
        value: "landPlotsForSale",
        image: "/SidebarSubImages/land-and-plots-for-sale.png",
      },
      {
        label: "Commercial Property for Rent",
        value: "commercialPropertyForRent",
        image: "/SidebarSubImages/commercial-property-for-rent.png",
      },
      {
        label: "Commercial Property for Sale",
        value: "commercialPropertyForSale",
        image: "/SidebarSubImages/commercial-property-for-sale.png",
      },
      {
        label: "Event Centres, Venues & Workstations",
        value: "eventCentresVenuesWorkstations",
        image: "/SidebarSubImages/event-centers-and-venues.png",
      },
      {
        label: "Short Let Property",
        value: "shortLetProperty",
        image: "/SidebarSubImages/short-let.png",
      },
    ],
  },
  {
    id: 3,
    label: "Mobile phones & Tablets",
    value: "mobilePhoneAndTablets",
    image: "/SidebarImages/mobile.png",
    features: [
      {
        label: "Mobile Phones",
        value: "mobilePhones",
        image: "/SidebarSubImages/phones.png",
      },
      {
        label: "Accessories for Mobile Phone & Tablets",
        value: "accessoriesFOrMobilePhoneTablets",
        image: "/SidebarSubImages/accessories-for-mobile-and-tablet.png",
      },
      {
        label: "Smart Watches & Trackers",
        value: "smartWatchesTrackers",
        image: "/SidebarSubImages/watches.png",
      },
      {
        label: "Tablets",
        value: "tablets",
        image: "/SidebarSubImages/tablets.png",
      },
    ],
  },
  {
    id: 4,
    label: "Electronics",
    value: "electronics",
    image: "/SidebarImages/electronics.png",
    features: [
      {
        label: "Accessories & Supplies for Electronics",
        value: "accessoriesSuppliesForElectronics",
        image: "/SidebarSubImages/accessories-and-supplies-electronics.png",
      },
      {
        label: "Laptops & Computers",
        value: "laptopsComputers",
        image: "/SidebarSubImages/laptops.png",
      },
      {
        label: "Tv & DVD equipment",
        value: "tvDvdEquipment",
        image: "/SidebarSubImages/tv.png",
      },
      {
        label: "Audio & Music Equipment",
        value: "audioMusicEquipment",
        image: "/SidebarSubImages/audio.png",
      },
      {
        label: "Computer Accessories",
        value: "computerAccessories",
        image: "/SidebarSubImages/computer-accessories.png",
      },
      {
        label: "Computer Hardware",
        value: "computerHardware",
        image: "/SidebarSubImages/computer-hardware.png",
      },
      {
        label: "Computer Moniter",
        value: "computerMoniter",
        image: "/SidebarSubImages/computer-monitors.png",
      },
      {
        label: "Headphones",
        value: "headphones",
        image: "/SidebarSubImages/headphones.png",
      },
      {
        label: "Newtwork Products",
        value: "networkProducts",
        image: "/SidebarSubImages/networking-products.png",
      },
      {
        label: "Photo & Video Camera",
        value: "photoVideoCamera",
        image: "/SidebarSubImages/cameras.png",
      },
      {
        label: "Printers & Scanners",
        value: "printersScanners",
        image: "/SidebarSubImages/printers-and-scanners.png",
      },
      {
        label: "Security & Surveillance",
        value: "securitySurveillance",
        image: "/SidebarSubImages/security-and-surveillance.png",
      },
      {
        label: "Software",
        value: "software",
        image: "/SidebarSubImages/software.png",
      },
      {
        label: "Video games",
        value: "videoGames",
        image: "/SidebarSubImages/video-games.png",
      },
      {
        label: "Video Game Consoles",
        value: "videoGameConsoles",
        image: "/SidebarSubImages/game-consoles.png",
      },
    ],
  },
  {
    id: 5,
    label: "Home, Furniture & Appliances",
    value: "homeFurnitureAppliances",
    image: "/SidebarImages/home.png",
    features: [
      {
        label: "Furniture",
        value: "furniture",
        image: "/SidebarSubImages/furniture.png",
      },
      {
        label: "Garden Supplies",
        value: "gardenSupplies",
        image: "/SidebarSubImages/garden.png",
      },
      {
        label: "Home accessories",
        value: "homeAccessories",
        image: "/SidebarSubImages/home-accessories.png",
      },
      {
        label: "Home Appliances",
        value: "homeAppliances",
        image: "/SidebarSubImages/home-appliances.png",
      },
      {
        label: "Kitchen Appliances",
        value: "kitchenAppliances",
        image: "/SidebarSubImages/kitchen-appliances.png",
      },
      {
        label: "Kitchenware & Cookware",
        value: "kitchenwareCookware",
        image: "/SidebarSubImages/kitchen-and-dining.png",
      },
      {
        label: "Household Chemicals",
        value: "householdChemicals",
        image: "/SidebarSubImages/household-chemicals.png",
      },
    ],
  },
  {
    id: 6,
    label: "Health & Beauty",
    value: "healthBeauty",
    image: "/SidebarImages/beauty.png",
    features: [
      {
        label: "Bath & Body",
        value: "bathBody",
        image: "/SidebarSubImages/bath-and-body.png",
      },
      {
        label: "Fragrances",
        value: "fragrances",
        image: "/SidebarSubImages/fragrance.png",
      },
      {
        label: "Hair Beauty",
        value: "hairBeauty",
        image: "/SidebarSubImages/hair-beauty.png",
      },
      {
        label: "Make-up",
        value: "makeup",
        image: "/SidebarSubImages/makeup.png",
      },
      {
        label: "Sexual Wellness",
        value: "sexualWellness",
        image: "/SidebarSubImages/sexual-welness.png",
      },
      {
        label: "Skin Care",
        value: "skinCare",
        image: "/SidebarSubImages/skin-care.png",
      },
      {
        label: "Tobacco Accessories",
        value: "tobaccoAccessories",
        image: "/SidebarSubImages/tobacco-accessories.png",
      },
      {
        label: "Tools & Accessories",
        value: "toolsAccessories",
        image: "/SidebarSubImages/tools-and-accessories.png",
      },
      {
        label: "Vitamins & Supplements",
        value: "vitaminsSupplements",
        image: "/SidebarSubImages/vitamins-and-supplements.png",
      },
    ],
  },
  {
    id: 7,
    label: "Fashion",
    value: "fashion",
    image: "/SidebarImages/fashion.png",
    features: [],
  },
  {
    id: 8,
    label: "Sport, Arts & Outdoors",
    value: "sportArtOutdoors",
    image: "/SidebarImages/hobbies.png",
    features: [],
  },
  {
    id: 9,
    label: "Seeking Work Cvs",
    value: "seekingWorkCvs",
    image: "/SidebarImages/jobseekers.png",
    features: [],
  },
  {
    id: 10,
    label: "Services",
    value: "services",
    image: "/SidebarImages/services.png",
    features: [],
  },
  {
    id: 11,
    label: "Jobs",
    value: "jobs",
    image: "/SidebarImages/jobs.png",
    features: [],
  },
  {
    id: 12,
    label: "Babies & Kids",
    value: "babiesKids",
    image: "/SidebarImages/babies.png",
    features: [],
  },
  {
    id: 13,
    label: "Agriculture & Foods",
    value: "agricultureFood",
    image: "/SidebarImages/agriculture.png",
    features: [],
  },
  {
    id: 14,
    label: "Commerical Equipment & Tools",
    value: "commericalEquipmentTools",
    image: "/SidebarImages/equipment.png",
    features: [],
  },
  {
    id: 15,
    label: "Repair & Construction",
    value: "repairConstruction",
    image: "/SidebarImages/repair.png",
    features: [],
  },
];

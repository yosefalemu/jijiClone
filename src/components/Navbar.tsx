import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-customGreen sticky h-20 z-50 top-0 inset-x-0">
      <div className="h-full shadow shadow-slate-700">
        <MaxWidthWrapper className="h-full">
          <div className="h-full flex items-center justify-between">
            <Link href={"/"} className="relative h-3/4 aspect-video">
              <Image
                src={"/Icons/Ecommerce_0.png"}
                fill
                alt="Logo Image"
                className="object-contain"
              />
            </Link>
            <div className="flex items-center gap-6">
              <div className="">
                <NavItems />
              </div>
              <Link href={"/profile/user"}>
                <div className="relative rounded-full w-10 h-10 overflow-hidden cursor-pointer">
                  <Image
                    src={
                      "https://avatars.githubusercontent.com/u/125744573?v=4"
                    }
                    alt="userProfilePicture"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </Link>

              <div className="hidden lg:block">
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="text-md bg-orange-500 hover:bg-orange-600 text-white px-12"
                >
                  SELL
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};
export default Navbar;

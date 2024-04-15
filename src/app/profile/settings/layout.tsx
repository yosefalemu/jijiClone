"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileSettingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const currentUrl = usePathname();
  const activeElement = currentUrl.split("/");
  const specifiUrl = activeElement[activeElement.length - 1];
  console.log("ACTIVE ELEMENT", specifiUrl);

  return (
    <div className="mt-10">
      <MaxWidthWrapper>
        <div className="h-fit grid grid-cols-12 gap-y-14 xl:gap-y-0 lg:gap-8">
          <div className="relative col-span-12 xl:col-span-3 rounded-lg overflow-hidden flex flex-col s shadow-gray-300 shadow-lg h-fit">
            <div className="flex items-center gap-x-4 px-4 py-4">
              <Link href="/profile/user">
                <ChevronLeft size={32} />
              </Link>
              <h1 className="text-xl">Settings</h1>
            </div>
            <div className="bg-white">
              <div className="border-b border-green-200 px-4 py-4 cursor-pointer">
                <Link href={"/profile/settings/contact-details"}>
                  <h1
                    className={
                      specifiUrl === "contact-details"
                        ? "text-customGreen cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    Personal details
                  </h1>
                </Link>
              </div>
              <div className="px-4 py-4">
                <Link href={"/profile/settings/business"}>
                  <h1
                    className={
                      specifiUrl === "business"
                        ? "text-customGreen cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    Business details
                  </h1>
                </Link>
              </div>
            </div>
            <div className="h-6"></div>
            <div className="bg-white">
              <div className="border-b border-green-200 px-4 py-4">
                <Link href={"/profile/settings/phone"}>
                  <h1
                    className={
                      specifiUrl === "phone"
                        ? "text-customGreen cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    Change phone number
                  </h1>
                </Link>
              </div>
              <div className="px-4 py-4">
                <Link href={"/profile/settings/email"}>
                  <h1
                    className={
                      specifiUrl === "email"
                        ? "text-customGreen cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    Change email
                  </h1>
                </Link>
              </div>
            </div>
            <div className="h-6"></div>
            <div className="bg-white">
              <div className="border-b border-green-200 px-4 py-4">
                <Link href={"/profile/settings/chat"}>
                  <h1
                    className={
                      specifiUrl === "chat"
                        ? "text-customGreen cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    Disable chats
                  </h1>
                </Link>
              </div>
              <div className="px-4 py-4">
                <Link href={"/profile/settings/notifications"}>
                  <h1
                    className={
                      specifiUrl === "notifications"
                        ? "text-customGreen cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    Manage notifications
                  </h1>
                </Link>
              </div>
            </div>
            <div className="h-6"></div>
            <div className="bg-white">
              <div className="border-b border-green-200 px-4 py-4">
                <Link href={"/profile/settings/change-password"}>
                  <h1
                    className={
                      specifiUrl === "change-password"
                        ? "text-customGreen cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    Change password
                  </h1>
                </Link>
              </div>
              <div className="border-b border-green-200 px-4 py-4">
                <Link href={"/profile/settings/delete"}>
                  <h1
                    className={
                      specifiUrl === "delete"
                        ? "text-customGreen cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    Delete my account permanently
                  </h1>
                </Link>
              </div>
              <div className="px-4 py-4">
                <Link href={"/profile/settings/log-out"}>
                  <h1
                    className={
                      specifiUrl === "log-out"
                        ? "text-customGreen cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    Logout
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-9 rounded-lg bg-white h-fit mb-6 w-full">
            {children}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default ProfileSettingLayout;

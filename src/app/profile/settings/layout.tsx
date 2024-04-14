import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const ProfileSettingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
              <div className="border-b border-green-200 px-4 py-4">
                <h1>Personal details</h1>
              </div>
              <div className="px-4 py-4">
                <h1>Business details</h1>
              </div>
            </div>
            <div className="h-6"></div>
            <div className="bg-white">
              <div className="border-b border-green-200 px-4 py-4">
                <h1>Change phone number</h1>
              </div>
              <div className="px-4 py-4">
                <h1>Change email</h1>
              </div>
            </div>
            <div className="h-6"></div>
            <div className="bg-white">
              <div className="border-b border-green-200 px-4 py-4">
                <h1>Disable chats</h1>
              </div>
              <div className="px-4 py-4">
                <h1>Manage notifications</h1>
              </div>
            </div>
            <div className="h-6"></div>
            <div className="bg-white">
              <div className="border-b border-green-200 px-4 py-4">
                <h1>Change password</h1>
              </div>
              <div className="border-b border-green-200 px-4 py-4">
                <h1>Delete my account permanently</h1>
              </div>
              <div className="px-4 py-4">
                <h1>Logout</h1>
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

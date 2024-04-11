"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { FixedFooterItems } from "@/config";

const FooterForBottom = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const test = false;
  return (
    <div className="bg-gray-200">
      <MaxWidthWrapper>
        <div className="relative flex items-center justify-between border-b border-customGreen py-4">
          <Image
            height={40}
            width={150}
            src={"/Icons/Ecommerce_05.png"}
            alt="LOGO IMAGE"
            className="object-cover"
          />
          <div>
            {isOpen ? (
              <ChevronUp
                size={38}
                onClick={() => setIsOpen(false)}
                className="text-customGreen"
              />
            ) : (
              <ChevronDown
                size={38}
                onClick={() => setIsOpen(true)}
                className="text-customGreen"
              />
            )}
          </div>
        </div>
      </MaxWidthWrapper>
      {isOpen && (
        <div className="mt-8">
          <MaxWidthWrapper>
            <div className="grid grid-cols-12 gap-y-10">
              <div className="col-span-6">
                <div className="flex flex-col gap-3 h-full text-center">
                  <h1 className="text-customGreen">About Us</h1>
                  <Link
                    href={"/aboutJojo"}
                    className="text-customGreen text-sm"
                  >
                    About Jojo{" "}
                  </Link>
                  <Link
                    href={"/termsCondition"}
                    className="text-customGreen text-sm"
                  >
                    Terms & conditions
                  </Link>
                  <Link
                    href={"/privacyPolicy"}
                    className="text-customGreen text-sm"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href={"/billingPolicy"}
                    className="text-customGreen text-sm"
                  >
                    Billing Policy
                  </Link>
                  <Link
                    href={"/copyrightPolicy"}
                    className="text-customGreen text-sm"
                  >
                    Copyright policy
                  </Link>
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col gap-3 h-full text-center">
                  <h1 className="text-customGreen">About Us</h1>
                  <Link
                    href={"/aboutJojo"}
                    className="text-customGreen text-sm"
                  >
                    About Jojo{" "}
                  </Link>
                  <Link
                    href={"/termsCondition"}
                    className="text-customGreen text-sm"
                  >
                    Terms & conditions
                  </Link>
                  <Link
                    href={"/privacyPolicy"}
                    className="text-customGreen text-sm"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href={"/billingPolicy"}
                    className="text-customGreen text-sm"
                  >
                    Billing Policy
                  </Link>
                  <Link
                    href={"/copyrightPolicy"}
                    className="text-customGreen text-sm"
                  >
                    Copyright policy
                  </Link>
                </div>
              </div>
              <div className="col-span-12">
                <div className="w-full flex items-center justify-center gap-4">
                  <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white">
                    <Link href={"country"}>
                      <Image
                        fill
                        src={"/Flags/ghana.png"}
                        alt="GHANA FLAG"
                        className="object-cover"
                      />
                    </Link>
                  </div>
                  <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white">
                    <Link href={"country"}>
                      <Image
                        fill
                        src={"/Flags/ghana.png"}
                        alt="GHANA FLAG"
                        className="object-cover"
                      />
                    </Link>
                  </div>
                  <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white">
                    <Link href={"country"}>
                      <Image
                        fill
                        src={"/Flags/ghana.png"}
                        alt="GHANA FLAG"
                        className="object-cover"
                      />
                    </Link>
                  </div>
                  <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white">
                    <Link href={"country"}>
                      <Image
                        fill
                        src={"/Flags/ghana.png"}
                        alt="GHANA FLAG"
                        className="object-cover"
                      />
                    </Link>
                  </div>
                  <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white">
                    <Link href={"country"}>
                      <Image
                        fill
                        src={"/Flags/ghana.png"}
                        alt="GHANA FLAG"
                        className="object-cover"
                      />
                    </Link>
                  </div>
                  <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white">
                    <Link href={"country"}>
                      <Image
                        fill
                        src={"/Flags/ghana.png"}
                        alt="GHANA FLAG"
                        className="object-cover"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          <div className="bg-customGreen flex items-center justify-center py-4 mt-4">
            <h1 className="text-white">yosefalemu007@gmail.com</h1>
          </div>
        </div>
      )}
      {!test && (
        <div className="fixed bottom-0 h-fit w-full bg-white">
          <MaxWidthWrapper>
            <div className="flex items-center justify-evenly py-2">
              {FixedFooterItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-customGreen"
                >
                  <item.icon />
                  <h1 className="text-sm">{item.label}</h1>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        </div>
      )}
    </div>
  );
};
export default FooterForBottom;

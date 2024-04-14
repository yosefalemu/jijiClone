import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import FooterForBottom from "./FooterForBottom";

const Footer = () => {
  return (
    <>
      <div className="lg:hidden h-fit">
        <FooterForBottom />
      </div>
      <div className="hidden lg:block h-fit">
        <div className="relative bg-slate-100 flex items-baseline justify-center pt-24 h-fit">
          <div className="relative h-36 w-3/5">
            <Image
              fill
              src={"/Svgs/footerSvg.svg"}
              alt="FOOTER SVGS"
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-customGreen">
          <MaxWidthWrapper className="h-full">
            <div className="grid grid-cols-5 gap-4 h-full py-10">
              <div className="col-span-1">
                <div className="flex flex-col gap-3 h-full">
                  <h1 className="text-white text-xl">About Us</h1>
                  <Link href={"/aboutJojo"} className="text-white text-sm">
                    About Jojo{" "}
                  </Link>
                  <Link href={"/termsCondition"} className="text-white text-sm">
                    Terms & conditions
                  </Link>
                  <Link href={"/privacyPolicy"} className="text-white text-sm">
                    Privacy policy
                  </Link>
                  <Link href={"/billingPolicy"} className="text-white text-sm">
                    Billing Policy
                  </Link>
                  <Link
                    href={"/copyrightPolicy"}
                    className="text-white text-sm"
                  >
                    Copyright policy
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-3 h-full">
                  <h1 className="text-white text-xl">Support</h1>
                  <Link href={"supportJojo"} className="text-sm text-white">
                    support@gmail.com
                  </Link>
                  <Link href={"safetyTips"} className="text-sm text-white">
                    Safety tips
                  </Link>
                  <Link href={"contactUs"} className="text-sm text-white">
                    Contact us
                  </Link>
                  <Link href={"faq"} className="text-sm text-white">
                    FAQ
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-center flex flex-col gap-3">
                  <h1 className="text-white text-xl">Our apps</h1>
                  <div className="relative w-full h-12 overflow-hidden">
                    <Link href={"download"}>
                      <Image
                        fill
                        src={"/Icons/Ecommerce_02.png"}
                        alt="DownloadImage"
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <div className="relative w-full h-12 overflow-hidden">
                    <Link href={"download"}>
                      <Image
                        fill
                        src={"/Icons/Ecommerce_03.png"}
                        alt="DownloadImage"
                        className="object-contain"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-3">
                  <h1 className="text-white text-xl">Our resources</h1>
                  <Link
                    href={"supportJojo"}
                    className="text-sm text-white flex items-center gap-1"
                  >
                    <Instagram size={18} />
                    <h1>Jojo on Instagram</h1>
                  </Link>
                  <Link
                    href={"supportJojo"}
                    className="text-sm text-white flex items-center gap-1"
                  >
                    <Linkedin size={18} />
                    <h1>Jojo on Linkedin</h1>
                  </Link>
                  <Link
                    href={"supportJojo"}
                    className="text-sm text-white flex items-center gap-1"
                  >
                    <Facebook size={18} />
                    <h1>Jojo on Facebook</h1>
                  </Link>
                  <Link
                    href={"supportJojo"}
                    className="text-sm text-white flex items-center gap-1"
                  >
                    <Youtube size={18} />
                    <h1>Jojo on Youtube</h1>
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-3">
                  <h1 className="text-white text-xl">Hot links</h1>
                  <Link
                    href={"supportJojo"}
                    className="text-sm text-white flex items-center gap-1"
                  >
                    Jojo africa
                  </Link>
                </div>
              </div>
              <div className="col-span-5">
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
              <div className="col-span-5">
                <div className="flex items-center justify-center gap-2 text-white">
                  <Copyright size={18} />
                  <h1 className="text-white">yosefalemu007@gmail.com</h1>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
};
export default Footer;

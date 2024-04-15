import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const FAQ = () => {
  return (
    <MaxWidthWrapper className="max-w-screen-xl">
      <div className="mt-10">
        <div className="grid grid-cols-12 gap-y-1 lg:gap-y-8 gap-x-4">
          <div className="col-span-12 lg:col-span-6 lg:p-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-semibold">
                Jojo is the best place to sell anything to real people.
              </h1>
              <p className="text-lg">
                It is the biggest free online classified with an advanced
                security system. We provide a simple hassle-free solution to
                sell and buy almost anything.
              </p>
              <div>
                <p className="text-gray-600">Table of contents</p>
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center justify-between bg-gray-200 cursor-pointer p-3">
                    <h1>How to sell on Jiji?</h1>
                    <ChevronDown />
                  </div>
                  <div className="flex items-center justify-between bg-gray-200 cursor-pointer p-3">
                    <h1>How to buy on Jiji?</h1>
                    <ChevronDown />
                  </div>
                  <div className="flex items-center justify-between bg-gray-200 cursor-pointer p-3">
                    <h1>Safety</h1>
                    <ChevronDown />
                  </div>
                  <div className="flex items-center justify-between bg-gray-200 cursor-pointer p-3">
                    <h1>Sell like a pro!</h1>
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center p-8">
            <div className="relative h-3/4 w-3/4">
              <Image fill src={"/Svgs/first.svg"} alt="FAQQUESTION" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center p-8">
            <div className="relative h-3/4 w-3/4">
              <Image fill src={"/Svgs/first.svg"} alt="FAQQUESTION" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:p-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-semibold">How to sell on Jojo?</h1>
              <div className="mt-2 flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl font-bold">
                    1.<span className="text-customGreen ml-2">Register</span>
                  </h1>
                  <p className="text-lg">
                    Register using your e-mail and phone number (or do it via
                    Facebook or Google). Make sure you’re entering a correct
                    phone number, so your clients could reach you!
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    2.
                    <span className="text-customGreen ml-2">
                      Make photos of your item.
                    </span>
                  </h1>
                  <p className="text-lg">
                    Feel free to make a lot of photos using your smartphone.
                    Make sure they show your item in the best light.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    3.
                    <span className="text-customGreen ml-2">Press SELL.</span>
                  </h1>
                  <p className="text-lg">
                    Choose a proper category, upload your photos and write a
                    clear title and full description of your item. Enter a fair
                    price, select attributes and send your advert to review!
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    4.
                    <span className="text-customGreen ml-2">
                      Answer the messages and calls from your clients!
                    </span>
                  </h1>
                  <p className="text-lg">
                    If everything is ok with your advert, it’ll be on Jiji in a
                    couple of hours after sending to moderation. We’ll send you
                    a letter and notification when your advert goes live. Check
                    your messages and be ready to earn money!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:p-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-semibold">How to buy on Jojo?</h1>
              <div className="mt-2 flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl font-bold">
                    1.
                    <span className="text-customGreen ml-2">
                      {" "}
                      Search for the item.
                    </span>
                  </h1>
                  <p className="text-lg">
                    Find what you need using search panel and filters. We have
                    over a million adverts, choose exactly what you are looking
                    for.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    2.
                    <span className="text-customGreen ml-2">
                      Contact a seller
                    </span>
                  </h1>
                  <p className="text-lg">
                    You may use chat on Jiji or call them via phone. Discuss all
                    the details, negotiate about the price.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    3.
                    <span className="text-customGreen ml-2">
                      {" "}
                      Take your item or order a delivery.
                    </span>
                  </h1>
                  <p className="text-lg">
                    We check our sellers carefully, but it’s always better to
                    check twice, right? Meet a seller in public place and be
                    sure to pay only after collecting your item.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    4.
                    <span className="text-customGreen ml-2">
                      Leave your feedback about the seller
                    </span>
                  </h1>
                  <p className="text-lg">
                    Feel free to tell us about your purchase. Your feedback will
                    be published online on the seller’s page and will be very
                    helpful for other buyers. Let’s build a safe and
                    professional business community together!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center p-8">
            <div className="relative h-3/4 w-3/4">
              <Image fill src={"/Svgs/third.svg"} alt="FAQQUESTION" />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
export default FAQ;

"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { useStore } from "@/hooks";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FAQ = () => {
  const sellRef = useRef(null);
  const buyRef = useRef(null);
  const safetyRef = useRef(null);
  const proRef = useRef(null);

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { changeScrollDirection } = useStore();
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const newDirection = scrollY > lastScrollY ? "down" : "up";
      setScrollDirection(newDirection);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  useEffect(() => {
    changeScrollDirection(scrollDirection);
  }, [scrollDirection]);

  return (
    <MaxWidthWrapper className="max-w-screen-xl">
      <div className="mt-10">
        <div className="flex flex-col gap-y-8 lg:gap-x-4">
          <div className="lg:flex gap-x-8">
            <div className="flex-1 lg:p-8 ">
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
                    <div
                      className="flex items-center justify-between bg-gray-200 cursor-pointer p-3"
                      onClick={() => scrollToRef(sellRef)}
                    >
                      <h1>How to sell on Jojo?</h1>
                      <ChevronDown />
                    </div>
                    <div
                      className="flex items-center justify-between bg-gray-200 cursor-pointer p-3"
                      onClick={() => scrollToRef(buyRef)}
                    >
                      <h1>How to buy on Jojo?</h1>
                      <ChevronDown />
                    </div>
                    <div
                      className="flex items-center justify-between bg-gray-200 cursor-pointer p-3"
                      onClick={() => scrollToRef(safetyRef)}
                    >
                      <h1>Safety</h1>
                      <ChevronDown />
                    </div>
                    <div
                      className="flex items-center justify-between bg-gray-200 cursor-pointer p-3"
                      onClick={() => scrollToRef(proRef)}
                    >
                      <h1>Sell like a pro!</h1>
                      <ChevronDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:flex items-center justify-center lg:p-8 ">
              <div className="relative h-[250px] w-[300px]">
                <Image fill src={"/Svgs/first.svg"} alt="FAQQUESTION" />
              </div>
            </div>
          </div>
          <div className="lg:flex gap-x-8  pt-24 lg:pt-16" ref={sellRef}>
            <div className="flex-1 lg:flex items-center justify-center lg:p-8">
              <div className="relative h-[250px] w-[300px]">
                <Image fill src={"/Svgs/first.svg"} alt="FAQQUESTION" />
              </div>
            </div>
            <div className="flex-1 lg:p-8">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">How to sell on Jojo?</h1>
                <div className="flex flex-col gap-6">
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
                      clear title and full description of your item. Enter a
                      fair price, select attributes and send your advert to
                      review!
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
                      If everything is ok with your advert, it’ll be on Jojo in
                      a couple of hours after sending to moderation. We’ll send
                      you a letter and notification when your advert goes live.
                      Check your messages and be ready to earn money!
                    </p>
                  </div>
                  <Link href={"/sell"}>
                    <Button
                      className={buttonVariants({
                        size: "lg",
                        className: "bg-customGreen hover:bg-green-700",
                      })}
                    >
                      SELL
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex gap-x-8  pt-24 lg:pt-16" ref={buyRef}>
            <div className="flex-1 lg:p-8">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">How to buy on Jojo?</h1>
                <div className="flex flex-col gap-6">
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
                      over a million adverts, choose exactly what you are
                      looking for.
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
                      You may use chat on Jojo or call them via phone. Discuss
                      all the details, negotiate about the price.
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
                      Feel free to tell us about your purchase. Your feedback
                      will be published online on the seller’s page and will be
                      very helpful for other buyers. Let’s build a safe and
                      professional business community together!
                    </p>
                  </div>
                  <Link href={"/"}>
                    <Button
                      className={buttonVariants({
                        size: "lg",
                        className: "bg-customGreen hover:bg-green-700",
                      })}
                    >
                      GO SHOPPING
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:flex items-center justify-center lg:p-8">
              <div className="relative h-[250px] w-[300px]">
                <Image fill src={"/Svgs/third.svg"} alt="FAQQUESTION" />
              </div>
            </div>
          </div>
          <div className="lg:flex gap-x-8  pt-16" ref={safetyRef}>
            <div className="flex-1 lg:flex items-center justify-center lg:p-8">
              <div className="relative h-[250px] w-[300px]">
                <Image fill src={"/Svgs/fourth.svg"} alt="FAQQUESTION" />
              </div>
            </div>
            <div className="flex-1 lg:p-8">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">Safety</h1>
                <div className="flex flex-col gap-6">
                  <div>
                    <h1 className="text-2xl font-bold">
                      1.
                      <span className="text-customGreen ml-2"> General</span>
                    </h1>
                    <p className="text-lg">
                      We are highly focused on the security and can solve any
                      issues in short-terms. That’s why we ask you, kindly, to
                      leave a review after purchasing. If you run into any
                      problems with a seller, you can report us and Jojo Team
                      will check this seller as soon as possible.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">
                      2.
                      <span className="text-customGreen ml-2">
                        Personal safety tips
                      </span>
                    </h1>
                    <p className="text-lg">
                      - Do not pay in advance, even for the delivery
                    </p>
                    <p className="text-lg">
                      - Try to meet at a safe, public location
                    </p>
                    <p className="text-lg">
                      - Check the item BEFORE you buy it
                    </p>
                    <p className="text-lg">
                      - Pay only after collecting the item
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex gap-x-8 pt-16" ref={proRef}>
            <div className="flex-1 lg:p-8">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">Sell like a pro!</h1>
                <div className="flex flex-col gap-6">
                  <div>
                    <h1 className="text-2xl font-bold">
                      1.
                      <span className="text-customGreen ml-2">
                        Pay attention to the details.
                      </span>
                    </h1>
                    <p className="text-lg">
                      Make good photos of your goods, write clear and detailed
                      description.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">
                      2.
                      <span className="text-customGreen ml-2">
                        Answer quickly.
                      </span>
                    </h1>
                    <p className="text-lg">
                      Don’t make your buyer wait for your message for days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:flex items-center justify-center lg:p-8">
              <div className="relative h-[250px] w-[300px]">
                <Image fill src={"/Svgs/fifth.svg"} alt="FAQQUESTION" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
export default FAQ;

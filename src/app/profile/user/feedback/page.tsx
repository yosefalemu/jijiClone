"use client";
import NegativeFeedback from "@/components/NegativeFeedback";
import NeutralFeedback from "@/components/NeutralFeedback";
import PosetiveFeedback from "@/components/PosetiveFeedback";
import { Frown, Meh, Newspaper, Smile } from "lucide-react";
import { useState } from "react";

const Feedback = () => {
  const [selectedValue, setSelectedValue] = useState<string>("posetive");
  return (
    <div className="flex flex-col px-8">
      <div className="border-b border-green-200 py-8 flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <Newspaper className="text-customGreen" size={32} />
          <h1 className="hidden md:block text-xl font-bold">Feedbacks</h1>
        </div>
        <div className="flex items-center gap-x-4">
          <div
            className={`px-2 py-1 md:px-4 md:py-3 rounded-md cursor-pointer flex items-center gap-x-2 ${
              selectedValue === "posetive"
                ? "bg-customGreen"
                : "border border-customGreen"
            }`}
            onClick={() => setSelectedValue("posetive")}
          >
            <Smile
              className={`${
                selectedValue === "posetive" ? "text-white" : "text-customGreen"
              }`}
            />
            <h1
              className={`hidden xl:block ${
                selectedValue === "posetive" ? "text-white" : "text-customGreen"
              }`}
            >
              Posetive
            </h1>
          </div>
          <div
            className={`px-2 py-1 md:px-4 md:py-3 rounded-md cursor-pointer flex items-center gap-x-2 ${
              selectedValue === "neutral"
                ? "bg-orange-500"
                : "border border-orange-500"
            }`}
            onClick={() => setSelectedValue("neutral")}
          >
            <Meh
              className={`${
                selectedValue === "neutral" ? "text-white" : "text-orange-500"
              }`}
            />
            <h1
              className={`hidden xl:block ${
                selectedValue === "neutral" ? "text-white" : "text-orange-500"
              }`}
            >
              Neutral
            </h1>
          </div>
          <div
            className={`px-2 py-1 md:px-4 md:py-3 rounded-md cursor-pointer flex items-center gap-x-2 ${
              selectedValue === "negative"
                ? "bg-red-500"
                : "border border-red-500"
            }`}
            onClick={() => setSelectedValue("negative")}
          >
            <Frown
              className={`${
                selectedValue === "negative" ? "text-white" : "text-red-500"
              }`}
            />
            <h1
              className={`hidden xl:block ${
                selectedValue === "negative" ? "text-white" : "text-red-500"
              }`}
            >
              Negative
            </h1>
          </div>
        </div>
      </div>
      <div className="py-8">
        {selectedValue === "posetive" ? (
          <PosetiveFeedback />
        ) : selectedValue === "neutral" ? (
          <NeutralFeedback />
        ) : (
          <NegativeFeedback />
        )}
      </div>
    </div>
  );
};
export default Feedback;

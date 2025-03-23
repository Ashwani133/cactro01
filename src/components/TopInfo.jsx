import React from "react";
import { ArrowRight, X } from "lucide-react";

const TopInfo = () => {
  return (
    <div className="flex items-center justify-between bg-[#0064A0] text-white py-[16px] px-[20px] rounded-full">
      <div className="flex gap-x-[5px] items-center">
        <div className="">
          <span className="font-semibold">Slack is your digital HQ. </span>
          Meet the new featureskeeping teamsconnectedin a work-from-anywhere
          world.
          <span className="underline underline-offset-4">Let's go</span>
        </div>
        <ArrowRight size={18} />
      </div>
      <X size={18} />
    </div>
  );
};

export default TopInfo;

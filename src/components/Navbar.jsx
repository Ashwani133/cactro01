import React from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="px-[32px] flex items-center justify-between">
      <div className="flex items-center gap-x-[10px]">
        <div className="flex items-center gap-x-[5px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
            alt="logo"
            className="h-[32px] w-[32px]"
          />
          <span className="text-[30px] font-bold">slack</span>
        </div>
        <div>
          <ul className="flex items-center gap-x-[20px]">
            <li className="font-semibold">Products</li>
            <li className="font-semibold">Enterprice</li>
            <li className="font-semibold">Resources</li>
            <li className="font-semibold">Pricing</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-x-[20px]">
        <div>
          <Search />
        </div>
        <div className="font-semibold">Sign in</div>
        <Button
          variant="outline"
          className="border-[#4A154B] border-[2px] text-[#4A154B] rounded-none"
        >
          TALK TO SALES
        </Button>
        <Button className="bg-[#4A154B] rounded-none">TRY FOR FREE</Button>
      </div>
    </nav>
  );
};

export default Navbar;

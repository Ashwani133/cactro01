import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <main className="px-[26px] flex flex-col gap-y-[30px]">
      <div className="flex gap-x-[250px]">
        <div className="flex-1 px-[10px] flex flex-col gap-y-[20px] max-w-[450px] w-full">
          <h1 className="text-[50px] font-bold">
            Slack is where the future works
          </h1>
          <p>
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
          <div className="flex gap-x-[20px]">
            <Button className="bg-[#4A154B] rounded-[5px] px-[40px] py-[20px]">
              TRY FOR FREE
            </Button>
            <Button className="bg-[#2D85F0] rounded-[5px] h-[41px] px-[2px] py-[0px] pr-[40px]">
              <img
                src="https://www.logodesignteam.com/blog/wp-content/uploads/2017/05/Google_Logo_Designs_Over_the_Year-770x360.jpg"
                alt="google login"
                className="h-[26px] w-[35px] rounded-[5px]"
              />
              <span className="py-[20px]">SIGN UP WITH GOOGLE</span>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://www.getairspeed.com/wp-content/uploads/2023/12/airspeed-slack-communities-hero.png"
            alt="hero image"
            className="h-[400px]"
          />
        </div>
      </div>
      <div className="flex justify-between gap-x-[30px]">
        <img
          src="https://companieslogo.com/img/orig/FOX-a0b08ad2.png?t=1720244491"
          alt="icon"
          className="h-[50px] w-[80px]"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx07cUVpHM1-yP9Ez_77pvWEZ8StJ3jhzreg&s"
          alt="icon"
          className="h-[50px] w-[80px]"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6GsJm3NWyNDCIoUqGNXuTydBHDMTKZumeQ&s"
          alt="icon"
          className="h-[50px] w-[80px]"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZFJnaaP1udI-0Zzy7ALQTUHsuKMiC61oAw&s"
          alt="icon"
          className="h-[50px] w-[80px]"
        />
        <img
          src="https://e7.pngegg.com/pngimages/156/169/png-clipart-target-logo-target-corporation-logo-target-icon-logo-text-retail.png"
          alt="icon"
          className="h-[50px] w-[80px]"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2x54AhCYtJK8Bs9ox9QhM8TK4PKwOe5zeA&s"
          alt="icon"
          className="h-[50px] w-[80px]"
        />
      </div>
      <div className="flex gap-x-[250px]">
        <div className="flex-1 px-[10px] flex flex-col gap-y-[20px] max-w-[450px] w-full">
          <div className="flex justify-center">
            <iframe
              className="w-full h-[250px] sm:h-[400px] lg:h-[500px] rounded-lg"
              src="https://www.youtube.com/embed/FTuOS8E1LZk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-[20px] max-w-[450px]">
          <h1 className="text-[30px] font-semibold">
            Now is your moment to build a better tomorrow
          </h1>
          <p>
            We've seen what the future can be. Now it is time to decide what it
            will be .
          </p>
          <div className="flex gap-x-[20px]">
            <Button
              variant="outline"
              className="border-[#4A154B] border-[2px] text-[#4A154B] rounded-none"
            >
              WATCH VIDEO
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

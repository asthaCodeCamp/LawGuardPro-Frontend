import React from "react";
import Image from "next/image";
import userImageMan from "../../public/assets/man.png";
import lawyerImage from "../../public/assets/lawyer.png";
import closeImage from "../../public/assets/Close.png";
import { Button } from "@mui/material";

const MessageSidebarComponent = () => {
  return (
    <div className="p-6 z-10">
      <div className="flex justify-between pr-6">
        <p className="text-2xl font-semibold">More Details</p>
        <button>
          <Image
            src={closeImage}
            alt="Picture of the author"
            width={30}
            height={20}
            className="rounded-full"
          />
        </button>
      </div>
      <div className="mt-6 mb-12 ">
        <p className="font-semibold mb-2">Client details</p>
        <div className="flex">
          <div>
            <Image
              src={userImageMan}
              alt="Picture of the author"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="ml-4">
            <p className="font-semibold">Tomal Ahmed</p>
            <p>ID - 112235017</p>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-12 ">
        <p className="font-semibold mb-2">LawGaurd Pro Team</p>
        <div className="flex">
          <div>
            <Image
              src={lawyerImage}
              alt="Picture of the author"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="ml-4">
            <p className="font-semibold">Saifa Ahmed</p>
            <p className="text-violet-800">Lawyer</p>
          </div>
        </div>
      </div>
      <div className="border rounded-md p-2">
        <p className="font-semibold my-4">Ratings from previous clients</p>
        <div className="mb-4">
          <span>⭐⭐⭐⭐</span> <span>4 out of 5</span>
          <p className="mt-4 font-semibold">Clients Feedback</p>
          <div className="border-b-2 "></div>
          <div className="flex my-6">
            <div className="mr-2 mt-1">
              <Image
                src={userImageMan}
                alt="Picture of the author"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">Jacob Miler star</p>
              <p className="font-normal text-xs">
                Exceptional expertise and clear communication. Saifuddin Ahmed
                delivered results.
              </p>
            </div>
          </div>
          <div className="flex my-6">
            <div className="mr-2 mt-1">
              <Image
                src={userImageMan}
                alt="Picture of the author"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">Patrick star</p>
              <p className="font-normal text-xs">
                Saifuddin Ahmed was a game- changer. Compassionate,
                knowledgeable, and effective.
              </p>
            </div>
          </div>
          <div className="flex my-6">
            <div className="mr-2 mt-1">
              <Image
                src={userImageMan}
                alt="Picture of the author"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">Robert Benjamin star</p>
              <p className="font-normal text-xs">
                Peace of mind with Saifuddin Ahmed. Strong advocate, top-tier
                representation.
              </p>
            </div>
          </div>
          <div className="flex my-6">
            <div className="mr-2 mt-1">
              <Image
                src={userImageMan}
                alt="Picture of the author"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">Cristian Bale star</p>
              <p className="font-normal text-xs">
                Impressed by Saifuddin Ahmed's expertise and results-driven
                approach.
              </p>
            </div>
          </div>
          <Button
            className="w-full bg-gray-50 text-black hover:bg-slate-500 hover:text-white"
            variant="contained"
          >
            See all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageSidebarComponent;

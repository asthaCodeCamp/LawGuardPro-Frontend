import React from "react";
import Image from "next/image";
import userImageMan from "../../public/assets/man.png";
import lawyerImage from "../../public/assets/lawyer.png";
import closeImage from "../../public/assets/Close.png";
import { Button, Rating } from "@mui/material";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useGetLawyerByCaseId } from "@/modules/Lawyer/Lawyer.hooks";
import CircularIndeterminate from "./Spinner/Spinner";

const MessageSidebarComponent = () => {
  const session = useSession();
  const router = useRouter();
  const { data, isLoading: caseLoading } = useGetSingleCase(
    router.query?.caseId as string
  );
  const { firstName, lastName } = session.data?.user || {};
  const userId = data?.data?.userId || "";
  const userIdSplit = userId.split("-");
  const { data: lawyerData, isLoading: lawyerLoading } = useGetLawyerByCaseId(
    router?.query.caseId as string
  );
  const lawyerName = lawyerData?.data?.lawyerName;
  const value = 4;

  if (caseLoading || lawyerLoading) {
    return (
      <div className="flex justify-center mt-32">
        <CircularIndeterminate />
      </div>
    );
  }

  return (
    <div className="p-6 z-10">
      <div className="flex justify-between pr-6">
        <p className="text-2xl font-semibold">More Details</p>
        <button>
          <Image
            src={closeImage}
            alt="Close button"
            width={30}
            height={20}
            className="rounded-full"
          />
        </button>
      </div>
      <div className="mt-6 mb-12">
        <p className="font-semibold mb-2">Client details</p>
        <div className="flex">
          <div>
            <Image
              src={userImageMan}
              alt="Client image"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="ml-4">
            <p className="font-semibold">{`${firstName} ${lastName}`}</p>
            <p>ID - {userIdSplit[0]}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-12">
        <p className="font-semibold mb-2">LawGaurd Pro Team</p>
        <div className="flex">
          <div>
            <Image
              src={lawyerImage}
              alt="Lawyer image"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="ml-4">
            <p className="font-semibold">{lawyerName}</p>
            <p className="text-violet-800">Lawyer</p>
          </div>
        </div>
      </div>
      <div className="border rounded-md p-2">
        <p className="font-semibold my-4">Ratings from previous clients</p>
        <div className="mb-4">
          <span>
            <Rating
              name="read-only"
              value={lawyerData?.data?.rating}
              readOnly
            />
          </span>{" "}
          <span>{lawyerData?.data?.rating} out of 5</span>
          <p className="mt-4 font-semibold">Clients Feedback</p>
          <div className="border-b-2"></div>
          {["Jacob Miler", "Patrick", "Robert Benjamin", "Cristian Bale"].map(
            (name, index) => (
              <div className="flex my-6" key={index}>
                <div className="mr-2 mt-1">
                  <Image
                    src={userImageMan}
                    alt="Client feedback image"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">{name} star</p>
                  <p className="font-normal text-xs">
                    {index === 0 &&
                      "Exceptional expertise and clear communication. Saifuddin Ahmed delivered results."}
                    {index === 1 &&
                      "Saifuddin Ahmed was a game-changer. Compassionate, knowledgeable, and effective."}
                    {index === 2 &&
                      "Peace of mind with Saifuddin Ahmed. Strong advocate, top-tier representation."}
                    {index === 3 &&
                      "Impressed by Saifuddin Ahmed's expertise and results-driven approach."}
                  </p>
                </div>
              </div>
            )
          )}
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

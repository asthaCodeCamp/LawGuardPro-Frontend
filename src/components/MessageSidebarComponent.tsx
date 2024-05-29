import React from "react";

const MessageSidebarComponent = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between pr-6">
        <p className="text-2xl font-semibold">More Details</p>
        <p>close</p>
      </div>
      <div className="mt-6 mb-12 border">
        <p className="font-semibold">Client details</p>
        <div className="flex">
          <div>image</div>
          <div className="ml-4">
            <p className="font-semibold">Tomal Ahmed</p>
            <p>ID - 112235017</p>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-12 border">
        <p className="font-semibold">LawGaurd Pro Team</p>
        <div className="flex">
          <div>image</div>
          <div className="ml-4">
            <p className="font-semibold">Saifuddin Ahmed</p>
            <p className="text-violet-800">Lawyer</p>
          </div>
        </div>
      </div>
      <div className="border rounded-md p-2">
        <p className="font-semibold my-4">Ratings from previous clients</p>
        <div className="mb-4">
          <span>star star</span> <span>4.5 out of 5</span>
          <p className="mt-4 font-semibold">Clients Feedback</p>
          <div className="border-b-2 "></div>
          user profile
        </div>
      </div>
    </div>
  );
};

export default MessageSidebarComponent;

import React from "react";

function ExperienceCard({ logo, companyName, role, time }) {
  return (
    <div className="max-w-screen-lg mx-auto p-2 md:pl-8 md:pr-8">
      <div className="flex flex-row justify-center font-oxygen">
        <div class="bg-babyblue opacity-80 border-black border-2 rounded-lg min-w-max md:max-w-4xl mx-8 p-6 w-full">

          {/* card content */}
          <div className="flex flex-row gap-4 items-center justify-between w-full">
            <div className="bg-tearblue h-12 w-12 aspect-square flex justify-center rounded-md border-black border md:flex-none" />
            <div className="flex flex-col flex-grow flex-shrink pl-2">
              <div className="text-sm pb-2">{companyName}</div>
              <div className="text-xs">{role}</div>
            </div>
            <div className="text-xs md:text-md">{time}</div>
          </div>
  
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;

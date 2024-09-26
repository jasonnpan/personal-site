import React from "react";

function ExperienceCard({ logo, companyName, role, time }) {
  return (
    <div class="max-w-screen-lg mx-auto p-2 md:pl-8 md:pr-8">
      <div class="flex flex-row justify-center font-oxygen">
        <div class="bg-babyblue opacity-80 border-navyblue border-2 rounded-lg md:max-w-4xl mx-2 sm:mx-8 p-4 w-full">

          {/* card content */}
          <div class="flex flex-row gap-4 items-center justify-between w-full">
            <div class="bg-tearblue h-12 w-12 aspect-square flex justify-center rounded-md border-navyblue border md:flex-none" />
            <div class="flex flex-col flex-grow flex-shrink pl-2">
              <div class="text-sm pb-2">{companyName}</div>
              <div class="text-xs">{role}</div>
            </div>
            <div class="text-xs md:text-md">{time}</div>
          </div>
  
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;

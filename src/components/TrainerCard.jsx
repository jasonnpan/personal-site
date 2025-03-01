import React from "react";
import ProfilePic from "../assets/pfp.png";
import ContactNavbar from "./ContactNavbar";

function TrainerCard() {
  return (
    <div
      className="mx-auto p-2 md:p-8"
    >
      <div class="flex justify-center font-oxygen">
        <div class="bg-babyblue opacity-80 border-navyblue border-2 rounded-lg max-w-4xl mx-2 mt-12 p-6 sm:mx-8 md:p-8">
          {/* header */}
          <div class="flex flex-col gap-4 items-center justify-center md:flex-row md:justify-between">
            <div class="text-xl text-center">TRAINER CARD</div>
            <ContactNavbar />
          </div>

          {/* pfp + main intro */}
          <div class="flex flex-col md:flex-row">
            <img
              src={ProfilePic}
              alt={"me and pikachu :D"}
              class={"bg-tearblue h-full w-full md:h-32 md:w-32 aspect-square flex justify-center rounded-md border-navyblue border my-6 mr-8 md:flex-none"}
            />

            <div class="flex flex-col md:pt-5">
              <div class="text-xl">jason pan 🌱</div>
              <div class="text-xs pt-4 w-full md:w-2/3">
                3rd year <span class="text-darkblue">computer science</span>{" "}
                student @{" "}
                <a
                  class="hover:underline"
                  href="https://cs.uwaterloo.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uWaterloo
                </a>
                , specializing in human-computer interaction
              </div>
              <div class="text-xs pt-4 pb-12 md:pb-6">
                I'm a <span class="text-darkblue">software engineer</span> +{" "}
                <span class="text-forestgreen">design fanatic</span> who's
                passionate about crafting compelling user experiences.
              </div>
            </div>
          </div>

          {/* relevant coursework */}
          <div class="flex flex-col pb-8 md:pb-6">
            <div class="text-sm pb-2">RELEVANT COURSEWORK 🌿</div>
            {/* cs courses */}
            <div class="text-xs pb-2">
              <span class="text-darkblue">cs:{" [ "}</span>
              <a
                class="hover:underline"
                href="https://uwflow.com/course/cs240"
                target="_blank"
                rel="noopener noreferrer"
              >
                data structures
              </a>
              <span class="text-darkblue"> || </span>
              <a
                class="hover:underline"
                href="https://uwflow.com/course/cs136"
                target="_blank"
                rel="noopener noreferrer"
              >
                object-oriented programming
              </a>
              <span class="text-darkblue"> || </span>
              <a
                class="hover:underline"
                href="https://uwflow.com/course/cs241"
                target="_blank"
                rel="noopener noreferrer"
              >
                intro to compilers
              </a>
              <span class="text-darkblue">{" ]"}</span>
            </div>

            {/* fun courses */}
            <div class="text-xs">
              <span class="text-forestgreen">fun:{" [ "}</span>
              <a
                class="hover:underline"
                href="https://uwflow.com/course/psych101"
                target="_blank"
                rel="noopener noreferrer"
              >
                intro to psychology
              </a>
              <span class="text-forestgreen"> || </span>
              <a
                class="hover:underline"
                href="https://uwflow.com/course/korea101r"
                target="_blank"
                rel="noopener noreferrer"
              >
                intro to korean
              </a>
              <span class="text-forestgreen"> || </span>
              <a
                class="hover:underline"
                href="https://uwflow.com/course/engl108d"
                target="_blank"
                rel="noopener noreferrer"
              >
                digital lives
              </a>
              <span class="text-forestgreen">{" ]"}</span>
            </div>
          </div>

          {/* skills */}
          <div class="flex flex-col pb-8 md:pb-6">
            <div class="text-sm pb-2">SKILLS 🧃</div>
            <div class="text-xs pb-2">
              <span class="text-darkblue">languages: </span>
                c++, typescript, javascript, go, python, java, SQL, HTML/CSS
            </div>
            <div class="text-xs pb-1">
              <span class="text-forestgreen">technologies: </span> 
                react/react native, firebase, supabase/postgreSQL, mongoDB/noSQL, node, express, next.js, redux
            </div>
          </div>

          {/* interests */}
          <div class="flex flex-col pb-8 md:pb-6">
            <div class="text-sm pb-2">INTERESTS 🍉</div>
            <div class="text-xs pb-2">
              cooking, playing volleyball, tinkering on figma, watching travel vlogs
            </div>
          </div>

          {/* bonus stats section */}
          <div class="flex flex-col">
            <div class="text-xs pb-2">
              🥑 ADVENTURE STARTED: Sep 2022 @ uWaterloo
            </div>
            <div class="text-xs">💸 MONEY: $ broke.99</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div class=""></div>

export default TrainerCard;

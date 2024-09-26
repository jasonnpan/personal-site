import React from "react";

function TrainerCard() {
  return (
    <div className="mx-auto p-2 md:p-8">
      <div class="flex justify-center font-oxygen">
        <div class="bg-babyblue opacity-80 border-black border-2 rounded-lg max-w-4xl mx-8 mt-12 p-6 md:p-8">
          {/* header */}
          <div class="flex flex-col gap-4 items-center justify-center md:flex-row md:justify-between">
            <div class="text-xl text-center">TRAINER CARD</div>
            <div class="bg-tearblue flex gap-4 px-6 py-2 rounded-md border-black border text-xs w-fit justify-center">
              <div class="hover:underline cursor-pointer">resume</div>
              <div class="">|</div>
              <a
                class="hover:underline cursor-pointer"
                href="https://github.com/jasonnpan"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              <div class="">|</div>
              <a
                class="hover:underline cursor-pointer"
                href="https://www.linkedin.com/in/jasonpann/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
              <div class="">|</div>
              <a
                class="hover:underline cursor-pointer"
                href="mailto:j7pan@uwaterloo.ca"
              >
                email
              </a>
            </div>
          </div>

          {/* pfp + main intro */}
          <div class="flex flex-col md:flex-row">
            {/* replace this with an image later */}
            <div class="bg-tearblue h-full w-full md:h-32 md:w-32 aspect-square flex justify-center rounded-md border-black border my-6 mr-8 md:flex-none" />

            <div class="flex flex-col md:pt-5">
              <div class="text-xl">jason pan 🌱</div>
              <div class="text-xs pt-4 w-3/4">
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
              <span class="text-darkblue">cs:</span>
              {" [ "}
              <a
                class="hover:underline"
                href="https://uwflow.com/course/cs240"
                target="_blank"
                rel="noopener noreferrer"
              >
                data structures
              </a>{" "}
              |{" "}
              <a
                class="hover:underline"
                href="https://uwflow.com/course/cs136"
                target="_blank"
                rel="noopener noreferrer"
              >
                object-oriented programming
              </a>{" "}
              |{" "}
              <a
                class="hover:underline"
                href="https://uwflow.com/course/cs241"
                target="_blank"
                rel="noopener noreferrer"
              >
                intro to compilers
              </a>
              {" ]"}
            </div>
            {/* fun courses */}
            <div class="text-xs">
              <span class="text-forestgreen">fun:</span>
              {" [ "}
              <a
                class="hover:underline"
                href="https://uwflow.com/course/psych101"
                target="_blank"
                rel="noopener noreferrer"
              >
                intro to psychology
              </a>{" "}
              |{" "}
              <a
                class="hover:underline"
                href="https://uwflow.com/course/korea101r"
                target="_blank"
                rel="noopener noreferrer"
              >
                intro to korean
              </a>{" "}
              |{" "}
              <a
                class="hover:underline"
                href="https://uwflow.com/course/engl108d"
                target="_blank"
                rel="noopener noreferrer"
              >
                digital lives
              </a>
              {" ]"}
            </div>
          </div>

          {/* skills */}
          <div class="flex flex-col pb-8 md:pb-6">
            <div class="text-sm pb-2">SKILLS 🧃</div>
            <div class="text-xs pb-2">
              <span class="text-darkblue">languages:</span> c++,
              typescript/javascript, swift, obj-c, python, SQL
            </div>
            <div class="text-xs pb-1">
              <span class="text-forestgreen">technologies:</span> react, react
              native, firebase, redux, android studio, xcode, supabase, mongoDB
            </div>
          </div>

          {/* interests */}
          <div class="flex flex-col pb-8 md:pb-6">
            <div class="text-sm pb-2">INTERESTS 🍉</div>
            <div class="text-xs pb-2">
              reading, tinkering on figma, intramural volleyball, walking
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

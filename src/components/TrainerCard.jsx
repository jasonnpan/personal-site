import React from "react";

function TrainerCard() {
  return (
    <div class="flex justify-center font-oxygen">
      <div class="bg-babyblue opacity-80 border-black border-2 rounded-lg p-8 max-w-4xl mx-8 my-12 r">
        {/* header */}
        <div class="flex justify-between">
          <div class="">TRAINER CARD</div>
          <div class="bg-tearblue flex gap-4 px-8 py-2 rounded-md">
            <div class="hover:underline cursor-pointer">resume</div>
            <div class="">|</div>
            <div class="hover:underline cursor-pointer">github</div>
            <div class="">|</div>
            <div class="hover:underline cursor-pointer">linkedin</div>
            <div class="">|</div>
            <div class="hover:underline cursor-pointer">email</div>
          </div>
        </div>

        {/* pfp + main intro */}
        <div class="">
          <div class="">img (tentative)</div>
          <div class="">
            <div class="">jason pan 🌱</div>
            <div class="">
              3rd year computer science student @ uwaterloo, specializing in
              human-computer interaction
            </div>
            <div class="">
              I'm a software engineer + design fanatic who's passionate about
              crafting compelling user experiences. In my free time, I enjoy
              reading + playing with plugins on figma!
            </div>
          </div>
        </div>

        {/* relevant coursework */}
        <div class="">
          <div class="">RELEVANT COURSEWORK 🌿</div>
          <div class="">
            cs: data structures + algorithms, object oriented programming,
            functional programming, intro to compilers
          </div>
          <div class="">
            fun: intro to psychology, intro to korean, digital lives
          </div>
        </div>

        {/* skills */}
        <div class="">
          <div class="">SKILLS 🧃</div>
          <div class="">
            languages: data structures + algorithms, object oriented
            programming, functional programming, intro to compilers
          </div>
          <div class="">
            fun: intro to psychology, intro to korean, digital lives
          </div>
        </div>

        {/* interests */}
        <div class="">
          <div class="">INTERESTS 🍉</div>
          <div class="">
            reading, tinkering on figma, intramural volleyball, walking
          </div>
        </div>

        {/* bonus stats section */}
        <div class="">
          <div class="">ADVENTURE STARTED: Sep 2022 @ uWaterloo</div>
          <div class="">MONEY: $ broke.99</div>
        </div>
      </div>
    </div>
  );
}

// <div class=""></div>

export default TrainerCard;

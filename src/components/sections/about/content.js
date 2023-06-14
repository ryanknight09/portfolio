import React from "react";

export const AboutContent = () => {
  return (
    <>
      <p>
        Currently I am building for
        <strong>
          <a
            href="https://www.geodeip.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {` Geodeip `}
          </a>
        </strong>
        building legal ops software in a fast pace and ever changing enviornment. Iv implemented complex features such as email inbox integrations and dynamic form builders with
        drag-and-drop inputs for data collection.
      </p>
      <p>
        I have worked with plenty of legacy code bases and helped companies bring new stacks and architecture to old projects with outdated frameworks.
        One of my main abilites is the data layer boundry. Getting efficient and non framework locked-in data fetching layer is a must. I spend a lot of time making sure the apps I build can be easily
        upgraded and maintained.
      </p>
    </>
  );
};

export const StackList = [
  {
    text: "Typescript",
    icon: "https://img.icons8.com/color/25/typescript.png",
  },
  {
    text: "React",
    icon: "https://img.icons8.com/ultraviolet/25/000000/react--v2.png",
  },
  {
    text: "Apollo GQL Server / Client",
    icon: "https://img.icons8.com/color/25/000000/apollo.png",
  },
  {
    text: "Fire Base",
    icon: "https://img.icons8.com/color/25/000000/firebase.png",
  },
  {
    text: "Styled Components",
    icon: "https://img.icons8.com/emoji/25/000000/nail-polish-.png",
  },
  {
    text: "Material UI",
    icon: "https://img.icons8.com/color/25/000000/material-ui.png",
  },
  {
    text: "version control: Git",
    icon: "https://img.icons8.com/ios/25/000000/git.png",
  },
];

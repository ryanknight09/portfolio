import React from "react";

export const AboutContent = () => {
  return (
    <>
      {/* <p>
        As a kid I learned how to send an sms message (when flip phones were
        cool) to my computer to shut it down remotely. Later, I became obsessed
        with audio gear and studied recording engineering where I learned about
        digital signal proccesors. This path eventually led me to computer
        science.
      </p> */}
      <p>
        I started out as a full-stack developer writting Java for a
        <strong>
          <a
            href="https://www.exactsciences.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {` healthcare company`}
          </a>
        </strong>
        . My current role for a
        <strong>
          <a
            href="https://www.storagecraft.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {` data backup and recovery shop `}
          </a>
        </strong>
        landed me in front end development. These days I spend the majority of
        my time writting with javascript. I work with react and graphql back-end
        for front-end api's. I absolutely LOVE working with gql api's.
      </p>
    </>
  );
};

export const liItemsOne = [
  {
    text: "Javascript (ES6 +)",
    icon: "https://img.icons8.com/color/25/000000/javascript--v2.png",
  },
  {
    text: "React (16.4 +)",
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

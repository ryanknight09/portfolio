import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: inherit;
  box-shadow: -10px 0px 20px -5px var(--shadow-box);
  height: 290px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  color: white;

  .row1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 25px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ProjectCard = () => {
  return (
    <StyledCard>
      <div class="row1">
        <img
          src="https://img.icons8.com/dotty/50/000000/folder-invoices.png"
          alt="folderIcon"
        />
        <a href={"google.com"} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/35/000000/github.png"
            alt="github-link"
          />
        </a>
      </div>
      <h3 style={{ padding: "10px 25px", margin: 0 }}>RGB COLOR GAME</h3>
      <p style={{ padding: "10px 25px", margin: 0 }}>
        Building a custom multisite compatible WordPress plugin to build global
        search with Algolia
      </p>
      <StyledDiv>
        {temp.map((p) => (
          <p style={{ fontSize: 12 }}>{p}</p>
        ))}
      </StyledDiv>
    </StyledCard>
  );
};

export default ProjectCard;

const temp = ["Css", "Html", "vanilla Js", "another"];

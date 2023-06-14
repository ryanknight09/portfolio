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
  margin-top: auto;
`;

const ProjectCard = ({ content }) => {
  const { gitLink, title, description, stacks } = content;
  return (
    <StyledCard>
      <div className="row1">
        <img
          src="https://img.icons8.com/dotty/50/000000/folder-invoices.png"
          alt="folderIcon"
        />
        <a href={gitLink} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/35/000000/github.png"
            alt="github-link"
          />
        </a>
      </div>
      <h3 style={{ padding: "10px 25px", margin: 0 }}>{title}</h3>
      <p style={{ padding: "0 25px", margin: 0 }}>{description}</p>
      <StyledDiv>
        {stacks.map((stack, index) => (
          <p key={`${stack}-${index}`} style={{ fontSize: 12 }}>
            {stack}
          </p>
        ))}
      </StyledDiv>
    </StyledCard>
  );
};

export default ProjectCard;

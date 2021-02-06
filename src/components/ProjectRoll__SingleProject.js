import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Image from "gatsby-image";
const Square = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  /* align-items: space-around; */
  transition: all 0.2s ease;
  ::after {
    top: 0;
    left: 50%;
    height: 100%;
    width: 0%;
    transition: all 0.4s ease;
    transform: skew(0.212rad);
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    content: " ";
  }
  &&:hover {
    transform: scale(1.1);
  }
  &&:hover::after {
    left: 0;
    height: 100%;
    width: 100%;
    content: " ";
    transform: skew(0);
  }
`;
const InnerImage = styled(Image)``;
const InnerTitle = styled.div`
  background-color: black;
  display: inline-block;

  padding-left: 2rem;
  padding-right: 2rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  max-width: calc(${(props) => props.imageSize} - 80px);
`;
const InnerSubtitle = styled.div`
  background-color: black;

  padding-left: 1rem;
  padding-right: 1rem;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
`;

const ProjectRoll__SingleProject = ({ project, imageSize }) => {
  const {
    title,
    subheading,
    description,
    image,
    Client,
    templateKey,
  } = project.node.frontmatter;
  return (
    <Square>
      {image && <InnerImage fluid={image.childImageSharp.fluid} />}
      <InnerTitle imageSize={imageSize}>{title}</InnerTitle>
      <InnerSubtitle>{Client && Client}</InnerSubtitle>
    </Square>
  );
};

export default ProjectRoll__SingleProject;

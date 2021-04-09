import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";
import placeholder from "../img/placeholder.png";
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
    transform: scale(1.05);
  }
  &&:hover::after {
    left: 0;
    height: 100%;
    width: 100%;
    content: " ";
    transform: skew(0);
  }
`;
const InnerImage = styled(Image)`
  height: 100%;
  position: absolute;
  width: 100%;
`;
const InnerTitle = styled.div`
  background-color: black;
  display: inline-block;
  position: absolute;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: white;
  font-size: 1rem;
  bottom: 5%;
  right: 5%;
  font-weight: 800;
  max-width: calc(${(props) => props.imageSize} - 80px);
`;
const InnerSubtitle = styled.div`
  background-color: black;
  position: absolute;
  top: 5%;
  left: 5%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 400;
`;

const ProjectRoll__SingleProject = ({ project, imageSize }) => {
  const {
    title,
    subheading,
    description,
    main_image,
    Client,
    templateKey,
  } = project.node.frontmatter;
  console.log(main_image);
  return (
    <StaticQuery
      query={FeatImgQuery}
      render={(data) => (
        <Square>
          <InnerImage
            fluid={
              main_image?.childImageSharp?.fluid ||
              data.allImageSharp.edges[0].node.fluid
            }
          />
          <InnerTitle imageSize={imageSize}>{title}</InnerTitle>
          <InnerSubtitle>{Client && Client}</InnerSubtitle>
        </Square>
      )}
    ></StaticQuery>
  );
};

export const FeatImgQuery = graphql`
  query FeatImageQuery {
    allImageSharp(
      filter: { fluid: { originalName: { eq: "placeholder.png" } } }
    ) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default ProjectRoll__SingleProject;

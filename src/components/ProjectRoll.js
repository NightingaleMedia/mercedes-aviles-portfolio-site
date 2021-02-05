import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import ProjectRoll__SingleProject from "./ProjectRoll__SingleProject";

const ProjectRollWrap = styled.div`
  width: 100%;
  max-width: calc(${(props) => props.imageSize} * 3 + 60px);
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.imageSize}, ${(props) => props.imageSize})
  );
  grid-auto-rows: minmax(${(props) => props.imageSize}, 1fr);
  grid-gap: 20px;
  grid-auto-flow: row;
  justify-content: start;
`;
const ProjectRoll__Item = styled.div`
  cursor: pointer;
  width: ${(props) => props.imageSize};
  height: ${(props) => props.imageSize};
  overflow: hidden;
`;
const ProjectRoll = ({ data }) => {
  const imageSize = "400px";
  return (
    <ProjectRollWrap imageSize={imageSize}>
      {data.map((d) => (
        <ProjectRoll__Item key={d.node.id} imageSize={imageSize}>
          <Link to={d.node.fields.slug}>
            <ProjectRoll__SingleProject project={d} imageSize={imageSize} />
          </Link>
        </ProjectRoll__Item>
      ))}
    </ProjectRollWrap>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        projects: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "project" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                subheading
                Client
                description
                templateKey
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <ProjectRoll data={data.projects.edges} count={count} />
    )}
  />
);

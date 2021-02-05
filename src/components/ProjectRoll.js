import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
const ProjectRoll = ({ data }) => {
  return (
    <div>
      {data.map((d) => (
        <p>
          {" "}
          <Link to={d.node.fields.slug}> {d.node.frontmatter.title} </Link>{" "}
        </p>
      ))}
    </div>
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
                subheading
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

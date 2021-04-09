import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import styled from "@emotion/styled";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const StyledFrame = styled.iframe`
  min-height: 550px;
  width: 100%;
  border: none;
  inset: none;
`;

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  embed_url,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Link to="/">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  margin: "0 auto 2rem auto",
                }}
              >
                <MdKeyboardArrowLeft style={{ fontSize: "2rem" }} />
                Back
              </div>
            </Link>
            <StyledFrame src={embed_url} />
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: description }} />

            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Project = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProjectTemplate
        content={post.html}
        contentComponent={HTMLContent}
        embed_url={post.frontmatter.embed_url}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default Project;

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        # date(formatString: "MMMM DD, YYYY")
        title
        embed_url
        description
        # tags
      }
    }
  }
`;

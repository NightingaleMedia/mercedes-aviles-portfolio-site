import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { StyledFrame } from "./project";
import { MdKeyboardArrowLeft } from "react-icons/md";
export const BlogPostTemplate = ({
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

            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        embed_url={post.frontmatter.url}
        content={post.html}
        contentComponent={HTMLContent}
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

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        # date(formatString: "MMMM DD, YYYY")
        title
        description
        # tags
        url
      }
    }
  }
`;

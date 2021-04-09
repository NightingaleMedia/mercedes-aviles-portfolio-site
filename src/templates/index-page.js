import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import PortfolioHeader from "../components/PortfolioHeader";
import ProjectRoll from "../components/ProjectRoll";
import PerformanceRoll from "../components/PerformanceRoll";
import Layout from "../components/Layout";
import "./index-page.sass";

export const IndexPageTemplate = ({ image, title, heading, subheading }) => (
  <div>
    <PortfolioHeader title={title} subheading={subheading} image={image} />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="content" id="projects">
            <div className="sticky-title">
              <h3 className="has-text-weight-semibold is-size-2">Projects</h3>
            </div>
            <div className="has-text-centered">
              <ProjectRoll />
            </div>

            <div class="sticky-title" id="performances">
              <h3 className="has-text-weight-semibold is-size-2">
                Performances
              </h3>
            </div>
            <div className="has-text-centered">
              <PerformanceRoll />
              <Link className="btn" to="/blog">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`;

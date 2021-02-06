import React from "react";
import PropTypes from "prop-types";

const PortfolioHeader = ({ title, subheading, image }) => {
  return (
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            backgroundColor: "#181818",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            backgroundColor: "#181818",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
            display: "inline-block",
            width: "max-content",
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
  );
};

PortfolioHeader.propTypes = {};

export default PortfolioHeader;

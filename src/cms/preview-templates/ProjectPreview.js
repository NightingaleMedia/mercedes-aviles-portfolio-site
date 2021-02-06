import React from "react";
import PropTypes from "prop-types";
import { ProjectTemplate } from "../../templates/project";

const ProjectPreview = ({ entry, widgetFor }) => (
  <ProjectTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default ProjectPreview;

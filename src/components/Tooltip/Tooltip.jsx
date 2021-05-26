import React from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = (props) => {
  const { variant = "default" } = props;
  return <ReactTooltip className={`tt-${variant}`} place="bottom" effect="solid" />;
};

export default Tooltip;

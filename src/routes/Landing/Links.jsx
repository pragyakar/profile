import React from "react";
import { GitHub, Linkedin, Paperclip, Send } from "react-feather";
import Tooltip from '../../components/Tooltip';

const Links = () => {
  return (
    <div className="pr-links">
      <a
        href="https://github.com/pragyakar"
        target="_blank"
        rel="noopener noreferrer"
        data-tip="GitHub"
        data-delay-show={"150"}
      >
        <GitHub className="pr-links__icon" />
        <Tooltip variant="peach"/>
      </a>
      <Linkedin className="pr-links__icon" />
      <Paperclip className="pr-links__icon" />
      <Send className="pr-links__icon" />
    </div>
  );
};

export default Links;

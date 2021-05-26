import React from "react";
import { GitHub, Linkedin, Paperclip, Send } from "react-feather";
import Tooltip from "../../components/Tooltip";

const Links = () => {
  return (
    <div className="pr-links">
      {/* Github */}
      <a
        href="https://github.com/pragyakar"
        target="_blank"
        rel="noopener noreferrer"
        data-tip="github"
        data-delay-show={"150"}
      >
        <GitHub className="pr-links__icon" />
        <Tooltip variant="peach" />
      </a>
      {/* Linkedin */}
      <a
        href="https://www.linkedin.com/in/pragyakar/"
        target="_blank"
        rel="noopener noreferrer"
        data-tip="linkedin"
        data-delay-show={"150"}
      >
        <Linkedin className="pr-links__icon" />
        <Tooltip variant="peach" />
      </a>
      {/* CV */}
      <a
        href="/profile/PragyakarJoshiCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        data-tip="view my cv"
        data-delay-show={"150"}
      >
        <Paperclip className="pr-links__icon" />
        <Tooltip variant="peach" />
      </a>
      {/* Send email */}
      <a
        href="mailto:pragyakarj@gmail.com"
        data-tip="write to me"
        data-delay-show={"150"}
      >
        <Send className="pr-links__icon" />
        <Tooltip variant="peach" />
      </a>
    </div>
  );
};

export default Links;

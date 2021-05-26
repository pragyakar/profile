import React from "react";
import { GitHub, Linkedin, Paperclip, Send } from "react-feather";

const Links = () => {
  return (
    <div className="pr-links">
      <GitHub className="pr-links__icon" />
      <Linkedin className="pr-links__icon" />
      <Paperclip className="pr-links__icon" />
      <Send className="pr-links__icon" />
    </div>
  );
};

export default Links;

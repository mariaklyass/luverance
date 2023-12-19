import React from "react";
import { SOCIALMEDIA } from "../../utils/constants";
import Icon from "../Icon/Icon";

const SocialMedia = () => (
  <ul className="socialmedia">
    {SOCIALMEDIA.map(({ icon, link }) => (
      <li title={icon} className="socialmedia-item" key={icon}>
        <a href={link} target="__blank">
          <Icon name={icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialMedia;

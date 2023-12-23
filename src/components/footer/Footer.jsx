import React from "react";
// import Logo from "../Logo/Logo";
import SocialMedia from "../socialmedia/SocialMedia";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <a href="https://band.link/luverance" target="_blank">
        <img className="footer-logo" src="/images/footer-logo.jpg"></img>
      </a>
      <div className="follow">
        <p>Следить за новостями & слушать новую музыку:</p>
        <SocialMedia />
      </div>
      <div className="madeby">
        {" "}
        <a href="https://github.com/mariaklyass" target="_blank">
          <h4>
            2023, Made by @mariaklyass{" "}
            <svg>
              <use xlinkHref={`/icons/sprite.svg#github`}></use>
            </svg>{" "}
          </h4>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

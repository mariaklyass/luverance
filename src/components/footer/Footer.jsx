import React from "react";
// import SocialMedia from "../socialmedia/SocialMedia";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="follow">
        {/* <SocialMedia /> */}
        <div className="socialmedia">
          <a href="https://t.me/luverance" target="_blank">
            <img src="/src/assets/icons/telegram.svg" />
          </a>
          <a href="https://vk.com/luverance" target="_blank">
            {" "}
            <img src="/src/assets/icons/vkontakte.svg" />
          </a>
          <a href="https://www.youtube.com/@Luverance" target="_blank">
            {" "}
            <img src="/src/assets/icons/vkontakte.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

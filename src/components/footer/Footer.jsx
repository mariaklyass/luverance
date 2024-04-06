import React from "react";
import Telegram from "/src/assets/icons/telegram.svg";
import Vkontakte from "/src/assets/icons/vkontakte.svg";
import Youtube from "/src/assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="follow">
        {/* <SocialMedia /> */}
        <div className="socialmedia">
          <a href="https://t.me/luverance" target="_blank">
            <img src={Telegram} alt="telegram link" />
          </a>
          <a href="https://vk.com/luverance" target="_blank">
            {" "}
            <img src={Vkontakte} alt="vkontakte link" />
          </a>
          <a href="https://www.youtube.com/@Luverance" target="_blank">
            {" "}
            <img src={Youtube} alt="youtube link" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

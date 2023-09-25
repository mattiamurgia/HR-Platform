import React from "react";
import {
  faLinkedin,
  faSquareBehance,
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconFooter = () => {
  return (
    <>
      <ul className="flex justify-center gap-6 mt-12 md:gap-8 text-main-green">
        <li>
          <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
          </a>
        </li>
        <li>
          <a href="https://it.linkedin.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSquareBehance} size="2xl" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSquareTwitter} size="2xl" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default IconFooter;

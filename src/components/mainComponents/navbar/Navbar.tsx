import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="fixed top-0 z-20 w-full p-3 border-b-[1px] bg-main-green border-b-second-green">
      <div className="flex flex-row items-center justify-between sm:justify-between max-w-screen-auto">
        <Link to="/">
          <a href="/" className="flex items-center">
            <img
              crossOrigin="anonymous"
              loading="eager"
              decoding="async"
              rel="preload"
              src="https://res.cloudinary.com/dnckkupc5/image/upload/c_scale,w_500/f_auto/q_auto/v1689934924/HR-Platform/logo-hr-platform.svg"
              className="h-[40px] w-[70px] md:ml-10 sm:ml-0"
              alt="HR Platform"
            />
          </a>
        </Link>

        <div
          className="items-center justify-between hidden w-full mx-auto md:w-auto lg:flex"
          id="navbar-sticky"
        >
          <ul className="lg:flex flex-row justify-between p-4 text-lg font-medium w-[60vw] hidden">
            <li>
              <Link to="/talent">
                <a
                  href="/talent"
                  className="block py-2 pl-3 pr-4 rounded text-second-green md:p-0"
                >
                  Per i talenti
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    rotation={180}
                    className="h-3 ml-1 align-middle"
                  />
                </a>
              </Link>
            </li>

            <li>
              <Link to="/companies">
                <a
                  href="/companies"
                  className="block py-2 pl-3 pr-4 rounded text-second-green md:p-0"
                >
                  Per le aziende
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    rotation={180}
                    className="h-3 ml-1 align-middle"
                  />
                </a>
              </Link>
            </li>

            <li>
              <Link to="/price">
                <a
                  href="/price"
                  className="block py-2 pl-3 pr-4 rounded text-second-green md:p-0 "
                >
                  Prezzi
                </a>
              </Link>
            </li>

            <li>
              <Link to="/collaborations">
                <a
                  href="/collaborations"
                  className="block py-2 pl-3 pr-4 rounded text-second-green md:p-0"
                >
                  Collaboriamo
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    rotation={180}
                    className="h-3 ml-1 align-middle"
                  />
                </a>
              </Link>
            </li>

            <li>
              <Link to="/resources">
                <a
                  href="/resources"
                  className="block py-2 pl-3 pr-4 rounded text-second-green md:p-0"
                >
                  Risorse
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    rotation={180}
                    className="h-3 ml-1 align-middle"
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:space-x-5 lg:mx-auto lg:space-x-3 ">
          <button
            type="button"
            className="hidden btn-cta text-second-green bg-dirty-white lg:inline"
          >
            Accesso
          </button>
          <button
            type="button"
            className="hidden btn-cta bg-second-green text-main-green lg:inline hover:bg-[#00554E]"
          >
            Registrati
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center justify-center w-16 h-16 p-4 border-[1.5px] border-r-4 border-b-4  border-black text-sm rounded-lg focus:outline-none focus:ring-2 lg:hidden bg-dirty-white relative right-1"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    to: "creators",
    link: "CREATORS",
  },
  {
    to: "work",
    link: "WORK",
  },
  {
    to: "skills",
    link: "SKILLS",
  },
  {
    to: "souvenirs",
    link: "SOUVENIRS",
  },
  {
    to: "chill",
    link: "CHILL",
  },
  {
    to: "contact",
    link: "CONTACT",
  },
];

export const SideBar = () => {
  return (
    <nav class="flex justify-end m-20 z-10 absolute right-0 bottom-20">
      <ul class="text-white text-4xl text-right">
        {links.map((link) => {
          return (
            <li
              key={link.link}
              className="transition-all hover:text-purple-700"
            >
              <Link to={link.to}>{link.link}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

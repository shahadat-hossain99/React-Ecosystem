import React from "react";
import Link from "./Link";

const navData = [
  {
    id: 1,
    name: "Home",
    path: "/",
    url: "https://example.com/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    url: "https://example.com/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
    url: "https://example.com/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
    url: "https://example.com/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
    url: "https://example.com/contact",
  },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        {navData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>

      {/* <ul className="flex">
        {navData.map((route) => (
          <li className="mr-10">
            <a key={route.id} href={route.path}>
              {route.name}
            </a>
          </li>
        ))}
      </ul> */}

      {/* <ul className="flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Blog">Blog</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;

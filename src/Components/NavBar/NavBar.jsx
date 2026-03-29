import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  const links = navData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between mx-10 mt-4">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul
          className={` md:hidden absolute
            opacity-80
            duration-700
           ${open ? "top-10" : "-top-40"}
           text-black 
           bg-yellow-50`}
        >
          {links}
        </ul>

        <h3 className="ml-4">My NavBar</h3>
      </span>

      <ul className="md:flex hidden">{links}</ul>

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

      <button className="btn btn-info">Sign In</button>
    </nav>
  );
};

export default NavBar;

"use client";
import Link from "next/link";
import { useState } from "react";

function Navbar(): React.ReactNode {
  const [isToggled, setIsToggled] = useState(false);
  function toggleNavbar() {
    setIsToggled(!isToggled);
  }

  const links = [
    {
      link: "/",
      name: "about",
    },
    {
      link: "/skills",
      name: "skills",
    },
    {
      link: "/experience",
      name: "experience",
    },
    {
      link: "/projects",
      name: "projects",
    },
    {
      link: "/contact",
      name: "contact",
    },
  ];

  return (
    <nav
      className={`flex flex-col md:flex-row justify-between gap-2 p-3 text-zinc-600`}
    >
      <div className="flex justify-between [&>*]:px-2 md:[&>*]:px-0">
        <h6 className="font-extrabold">
          <Link href="/" draggable={false}>
            mahima
          </Link>
        </h6>
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleNavbar}
            className="flex flex-col justify-center items-center [&>*]:block [&>*]:h-1 [&>*]:w-6 [&>*]:bg-zinc-700 [&>*]:rounded-md"
          >
            <span
              className={
                isToggled ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }
            />
            <span className={isToggled ? "opacity-0" : "opacity-100"} />
            <span
              className={
                isToggled ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }
            />
          </button>
        </div>
      </div>
      <ul
        className={`${
          isToggled ? "flex flex-col gap-0.5" : "hidden"
        } md:flex md:flex-row md:items-end md:gap-1`}
      >
        {links.map((item: { link: string; name: string }, index) => (
          <li
            key={index}
            onClick={toggleNavbar}
            className="px-2 pb-0.5 text-xl hover:bg-sky-300 hover:text-white hover:rounded-xl"
          >
            <Link href={item.link} draggable={false}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

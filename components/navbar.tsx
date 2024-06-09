'use client'
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  function toggleNavbar() {
    setIsToggled(!isToggled);
  }
  
  const links = [
    {
      id: 1,
      link: "/",
      name: "about"
    },
    {
      id: 2,
      link: "/experience",
      name: "experience"
    },
    {
      id: 3,
      link: "/projects",
      name: "projects"
    },
    {
      id: 4,
      link: "/activities",
      name: "activities"
    },
    {
      id: 5,
      link: "/awards",
      name: "awards"
    },
    {
      id: 6,
      link: "/contact",
      name: "contact"
    }
  ];

  return (
    <nav className="flex flex-col md:flex-row justify-between p-3 text-zinc-600">
      <h1 className="flex justify-between [&>*]:px-2 md:[&>*]:px-0 font-black text-zinc-700">
        <Link href="/" draggable={false }>mahima</Link>
        <div className="flex md:hidden items-center">
          <button onClick={toggleNavbar} className="flex flex-col justify-center items-center [&>*]:block [&>*]:h-1 [&>*]:w-6 [&>*]:bg-zinc-700 [&>*]:rounded-md">
            <span className={isToggled ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} />
            <span className={isToggled ? 'opacity-0' : 'opacity-100'} />
            <span className={isToggled ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} />
          </button>
        </div>
      </h1>
      <ul className={`${isToggled ? 'block' : 'hidden'} md:flex`}>
        {links.map(({ id, link, name }) => (
          <li key={id} onClick={toggleNavbar} className="px-2 last:mr-0 pb-0.5 my-1 md:my-0 md:mx-1 hover:bg-sky-300 hover:text-white hover:rounded-xl">
            <Link href={link} draggable={false}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
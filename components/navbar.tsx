"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { link: "/", name: "about" },
  { link: "/skills", name: "skills" },
  { link: "/experience", name: "experience" },
  { link: "/projects", name: "projects" },
  { link: "/contact", name: "contact" },
];

function Navbar(): React.ReactNode {
  const [isToggled, setIsToggled] = useState(false);
  const pathname = usePathname();

  function toggleNavbar() {
    setIsToggled(!isToggled);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-3">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            draggable={false}
            className="text-lg font-extrabold text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            mahima
          </Link>
          <button
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
            className="flex md:hidden flex-col justify-center items-center gap-1.5 p-2 [&>*]:block [&>*]:h-0.5 [&>*]:w-6 [&>*]:bg-zinc-700 dark:[&>*]:bg-zinc-300 [&>*]:rounded-full [&>*]:transition-transform"
          >
            <span
              className={
                isToggled ? "rotate-45 translate-y-2" : ""
              }
            />
            <span className={isToggled ? "opacity-0" : "opacity-100"} />
            <span
              className={
                isToggled ? "-rotate-45 -translate-y-2" : ""
              }
            />
          </button>
        </div>
        <ul
          className={`${
            isToggled ? "flex" : "hidden"
          } flex-col gap-1 md:flex md:flex-row md:items-center md:gap-1 pb-2 md:pb-0`}
        >
          {links.map((item) => {
            const isActive =
              item.link === "/"
                ? pathname === "/"
                : pathname.startsWith(item.link);
            return (
              <li key={item.link} onClick={toggleNavbar}>
                <Link
                  href={item.link}
                  draggable={false}
                  className={`block px-3 py-1.5 rounded-full text-base md:text-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

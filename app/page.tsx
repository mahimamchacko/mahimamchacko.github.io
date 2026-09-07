import Link from "next/link";
import Badge from "@/components/badge";
import { MailIcon, LinkedInIcon, GitHubIcon } from "@/components/icons";
import { contactLinks } from "@/lib/contact";

const icons = { mail: MailIcon, linkedin: LinkedInIcon, github: GitHubIcon };

const roles = [
  "software developer",
  "software engineer",
  "problem solver",
  "lifelong student",
];

function GetAbout() {
  return (
    <main className="container flex flex-col gap-8 md:gap-12 py-16 md:py-24">
      <div className="flex flex-col gap-4">
        <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide text-sm md:text-base">
          hi, i&apos;m
        </p>
        <h1>mahima chacko</h1>
        <div className="flex flex-wrap gap-2">
          {roles.map((role, index) => (
            <Badge key={index} variant="accent">
              <h6>{role}</h6>
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            draggable={false}
            className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
          >
            view my projects
          </Link>
          <Link
            href="/experience"
            draggable={false}
            className="px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300 hover:border-blue-300 dark:hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            see my experience
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 pt-1">
          {contactLinks.map((contact) => {
            const Icon = icons[contact.icon];
            return (
              <Link
                key={contact.title}
                href={contact.link}
                draggable={false}
                aria-label={contact.title}
                className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="text-base">{contact.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default GetAbout;

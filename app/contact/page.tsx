import Link from "next/link";
import { MailIcon, LinkedInIcon, GitHubIcon } from "@/components/icons";
import Reveal from "@/components/reveal";
import { contactLinks } from "@/lib/contact";

const icons = { mail: MailIcon, linkedin: LinkedInIcon, github: GitHubIcon };

function GetContact() {
  return (
    <main className="container flex flex-col gap-8 md:gap-12 py-16 md:py-24">
      <div className="flex flex-col gap-3">
        <h1>contact</h1>
        <p className="max-w-xl">
          Feel free to reach out. I&apos;m happy to chat about software,
          opportunities, or anything else.
        </p>
      </div>
      <div className="flex flex-col gap-3 max-w-lg">
        {contactLinks.map((contact, index) => {
          const Icon = icons[contact.icon];
          return (
            <Reveal key={contact.title} delay={index * 75}>
              <Link
                href={contact.link}
                draggable={false}
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500/30 motion-safe:hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50 capitalize">
                    {contact.title}
                  </span>
                  <span className="text-sm md:text-base text-zinc-500 dark:text-zinc-400">
                    {contact.label}
                  </span>
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </main>
  );
}

export default GetContact;

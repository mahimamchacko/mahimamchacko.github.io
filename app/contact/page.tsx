import Badge from "@/components/badge";
import Link from "next/link";

export default function GetContact() {
  const tabs = [
    {
      title: "email",
      link: "mailto:mahimamchacko@gmail.com",
      color: "bg-red-200",
    },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/in/mahimamchacko/",
      color: "bg-sky-200",
    },
    {
      title: "github",
      link: "https://github.com/mahimamchacko/",
      color: "bg-stone-200",
    },
  ];

  return (
    <main className="container flex flex-col gap-8 md:gap-12 py-12">
      <h1>contact</h1>
      <div className="flex flex-wrap gap-2">
        {tabs.map(
          (contact: { title: string; link: string; color: string }, index) => (
            <div key={index} className="flex gap-8 md:gap-10">
              <Badge color={contact.color}>
                <Link
                  href={contact.link}
                  draggable={false}
                  className="max-w-48 max-h-48 md:max-w-60 md:max-h-60"
                >
                  <h6>{contact.title}</h6>
                </Link>
              </Badge>
            </div>
          )
        )}
      </div>
    </main>
  );
}

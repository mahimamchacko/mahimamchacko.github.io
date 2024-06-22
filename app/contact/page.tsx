import Badge from "@/components/badge";
import Image from "next/image"
import Link from "next/link";

export default function Contact() {
  const tabs = [
    {
      id: 1,
      title: "email",
      link: "mailto:mahimamchacko@gmail.com",
      color: "bg-red-200"
    },
    {
      id: 2,
      title: "linkedin",
      link: "https://www.linkedin.com/in/mahimamchacko/",
      color: "bg-sky-200"
    },
    {
      id: 3,
      title: "github",
      link: "https://github.com/mahimamchacko/",
      color: "bg-stone-200"
    }
  ]

  return (
    <main className="container flex flex-col gap-8 md:gap-12 py-12">
      <h1>contact</h1>
      <div className="flex flex-wrap gap-2">
        {tabs.map(({ id, title, link, color }) => (
          <div key={id} className="flex gap-8 md:gap-10">
            <Badge color={color}>
                <Link href={link} draggable={false} className="max-w-48 max-h-48 md:max-w-60 md:max-h-60">
                  <h6>{title}</h6>
                </Link>
              </Badge>
          </div>
        ))}
      </div>
    </main>
  );
}
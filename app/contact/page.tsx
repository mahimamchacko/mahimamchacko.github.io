import Badge from "@/components/badge";
import Image from "next/image"
import Link from "next/link";

export default function Contact() {
  const tabs = [
    {
      id: 1,
      title: "GMAIL",
      link: "mailto:mahimamchacko@gmail.com",
      image: "/gmail_logo.png",
      color: "bg-red-200"
    },
    {
      id: 2,
      title: "LINKEDIN",
      link: "https://www.linkedin.com/in/mahimamchacko/",
      image: "/linkedin_logo.png",
      color: "bg-sky-200"
    }
  ]

  return (
    <main className="container flex flex-col gap-8 md:gap-12 py-12">
      <h1>contact</h1>
      <div className="flex flex-col gap-6 md:gap-8">
        {tabs.map(({ id, title, link, image, color }) => (
          <div key={id} className="flex gap-8 md:gap-10">
            <Link href={link} draggable={false} className="max-w-48 max-h-48 md:max-w-60 md:max-h-60">
              <Image src={image} width={500} height={500} alt={`Image of ${title} logo`} draggable={false}></Image>
            </Link>
            <Badge color={color}>
              <h6>{title}</h6>
            </Badge>
          </div>
        ))}
      </div>
    </main>
  );
}
import Link from "next/link";
import Badge from "./badge";

type CardProps = {
  title: string,
  period: string
  description: string,
  link: string,
  color: string,
  tags: string[]
}

export default function Card({ title, period, description, link, color, tags }: CardProps) : React.ReactNode {
  return (
    <div className="flex flex-col gap-2 shadow-xl p-3 rounded-xl">
      <Badge color={color}>
        <Link href={link} draggable={false} className="max-w-48 max-h-48 md:max-w-60 md:max-h-60">
          <h6>{title}</h6>
        </Link>
      </Badge>
      <Badge color="bg-zinc-100">
        <p>{period}</p>
      </Badge>
      <div>{description}</div>
      <div className="flex flex-wrap gap-1 md:gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} color="bg-zinc-200">
            <p>{tag}</p>
          </Badge>
        ))}
      </div>
    </div>
  );
}
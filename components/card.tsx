import Link from "next/link";
import Badge from "./badge";

type CardProps = {
  title: string;
  roles: string[];
  period: string;
  link: string;
  color: string;
  tags: string[];
  bullets: string[];
};

export default function Card({
  title,
  roles,
  period,
  link,
  color,
  tags,
  bullets,
}: CardProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-2 shadow-xl p-3 rounded-xl">
      <Badge color={color}>
        <Link
          href={link}
          draggable={false}
          className="max-w-48 max-h-48 md:max-w-60 md:max-h-60"
        >
          <h6>{title}</h6>
        </Link>
      </Badge>
      <div className="flex flex-wrap gap-1 md:gap-2">
        {roles.map((role, index) => (
          <Badge key={index} color="bg-zinc-100">
            <p>{role}</p>
          </Badge>
        ))}
      </div>
      <Badge color="bg-zinc-100">
        <p>{period}</p>
      </Badge>
      <div className="flex flex-wrap gap-1 md:gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} color="bg-zinc-200">
            <p>{tag}</p>
          </Badge>
        ))}
      </div>
      <ul className="list-disc pl-8 md:pl-10 mt-1 text-base md:text-md">
        {bullets.map((bullet: string, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

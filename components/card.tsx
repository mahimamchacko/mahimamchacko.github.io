import Link from "next/link";
import Badge from "./badge";

type CardProps = {
  title: string;
  roles: string[];
  period: string;
  link: string;
  tags: string[];
  bullets: string[];
};

function Card({
  title,
  roles,
  period,
  link,
  tags,
  bullets,
}: CardProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-2 p-4 md:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500/30 transition-shadow">
      <Badge variant="accent">
        <Link
          href={link}
          draggable={false}
          className="max-w-48 md:max-w-60"
        >
          <h6>{title}</h6>
        </Link>
      </Badge>
      <div className="flex flex-wrap gap-1 md:gap-2">
        {roles.map((role, index) => (
          <Badge key={index} variant="neutral">
            <p>{role}</p>
          </Badge>
        ))}
      </div>
      <Badge variant="neutral">
        <p>{period}</p>
      </Badge>
      <div className="flex flex-wrap gap-1 md:gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline">
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

export default Card;

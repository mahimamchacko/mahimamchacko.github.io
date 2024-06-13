import Badge from "./badge";

type Bullet = {
  id: number,
  bullet: string
}

type Experience = {
  id: number,
  title: string,
  company: string,
  period: string,
  location: string,
  bullets: Bullet[]
} 

type TimelineProps = {
  year: number,
  color: string,
  experiences: Experience[]
}

export default function Timeline({ year, color, experiences }: TimelineProps) : React.ReactNode {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <Badge color={color}>
        <h6>{year}</h6>
      </Badge>
      {experiences.map(({ id, title, company, period, location, bullets }) => (
        <div key={id}>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col items-start">
              <p className="font-bold">{title}</p>
              <p className="italic">{company}</p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <p>{period}</p>
              <p>{location}</p>
            </div>
          </div>
          <ul className="list-disc pl-8 md:pl-10 text-base md:text-md">
            {bullets.map(({ id, bullet }) => (
              <li key={id}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
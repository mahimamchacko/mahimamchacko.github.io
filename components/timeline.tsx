import Badge from "./badge";

export type Experience = {
  title: string,
  company: string,
  period: string,
  location: string,
  bullets: string[]
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
      {experiences.map((experience: { title: string, company: string, period: string, location: string, bullets: string[] }, index) => (
        <div key={index}>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col items-start">
              <p className="font-bold">{experience.title}</p>
              <p className="italic">{experience.company}</p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <p>{experience.period}</p>
              <p>{experience.location}</p>
            </div>
          </div>
          <ul className="list-disc pl-8 md:pl-10 mt-1 text-base md:text-md">
            {experience.bullets.map((bullet: string, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
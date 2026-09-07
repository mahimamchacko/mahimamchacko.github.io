import Badge from "./badge";

type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

type TimelineProps = {
  year: number;
  experiences: Experience[];
};

function Timeline({ year, experiences }: TimelineProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-3 md:gap-4 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 md:pl-6">
      <Badge variant="accent">
        <h6>{year}</h6>
      </Badge>
      {experiences.map(
        (
          experience: {
            title: string;
            company: string;
            period: string;
            location: string;
            bullets: string[];
          },
          index
        ) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col items-start">
                <p className="font-bold text-zinc-800 dark:text-zinc-200">
                  {experience.title}
                </p>
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
        )
      )}
    </div>
  );
}

export default Timeline;
export type { Experience };

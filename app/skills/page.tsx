import Badge from "@/components/badge";

export default function GetSkills() {
  const skills = [
    {
      label: "languages",
      tags: [
        "c#",
        "java",
        "python",
        "javascript",
        "sql",
        "graphql",
        "html",
        "css",
      ],
    },
    {
      label: "frameworks",
      tags: [
        ".net",
        "asp.net",
        "asp.net mvc",
        "entity framework",
        "bootstrap",
        "tailwind",
      ],
    },
    {
      label: "tools",
      tags: [
        "git",
        "gitlab",
        "github",
        "microsoft visual studio",
        "microsoft visual studio code",
        "jetbrains intellij",
        "bash",
        "rabbitmq",
        "microsoft sql server management studio",
        "oracle sql developer",
        "dbeaver",
        "mongodb compass",
        "atlassian jira",
        "atlassian confluence",
        "atlassian fisheye",
        "atlassian crucible",
        "tidal automation",
      ],
    },
    {
      label: "libraries",
      tags: [
        "nunit",
        "moq",
        "hot chocolate",
        "swagger",
        "strawberry shake",
        "newtonsoft.json",
        "linq",
        "nlog",
        "csvhelper",
        "junit",
        "jquery",
      ],
    },
    {
      label: "databases",
      tags: [
        "microsoft sql server",
        "oracle database",
        "postgresql",
        "mongodb",
      ],
    },
  ];

  return (
    <main className="container flex flex-col gap-8 md:gap-12 py-12">
      <h1>skills</h1>
      <ul className="flex flex-col gap-6 md:gap-8">
        {skills.map((skill: { label: string; tags: string[] }, index) => (
          <li key={index} className="flex flex-col gap-2">
            <h6 className="font-bold">{skill.label}</h6>
            <ul className="flex flex-wrap gap-1 md:gap-2">
              {skill.tags.map((tag: string, index) => (
                <li key={index}>
                  <Badge color="bg-zinc-200">{tag}</Badge>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}

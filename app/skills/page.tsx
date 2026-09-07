import Badge from "@/components/badge";

function GetSkills() {
  const skills = [
    {
      label: "languages",
      tags: [
        "c#",
        "java",
        "python",
        "typescript",
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
        "react",
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
    <main className="container flex flex-col gap-8 md:gap-12 py-16 md:py-24">
      <h1>skills</h1>
      <ul className="flex flex-col gap-4 md:gap-6">
        {skills.map((skill: { label: string; tags: string[] }, index) => (
          <li
            key={index}
            className="flex flex-col gap-3 p-4 md:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
          >
            <h6 className="text-blue-600 dark:text-blue-400">
              {skill.label}
            </h6>
            <ul className="flex flex-wrap gap-1 md:gap-2">
              {skill.tags.map((tag: string, index) => (
                <li key={index}>
                  <Badge variant="neutral">{tag}</Badge>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default GetSkills;

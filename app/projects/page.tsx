import Card from "@/components/card";

export default function GetProjects() {
  const projects = [
    {
      title: "Salamander",
      roles: ["Full-Stack Developer"],
      period: "Nov 2024 - Dec 2024",
      link: "https://github.com/mahimamchacko/salamander",
      color: "bg-cyan-200",
      tags: [
        "javascript",
        "html",
        "css",
        "sql",
        "postgresql",
        "web sockets",
        "ejs",
        "expressjs",
        "nodejs",
        "github",
      ],
      bullets: [
        "Collaborated with a tema of 2 peers to develop an e-commerce web app using NodeJS and PostgreSQL, enabling users to list auction items and place real-time bids",
        "Engineered scalable RESTful API endpoints with ExpressJS, integrating middleware and routing to optimize backend performance and maintainability",
        "Implemented token-based authorization to secure the web app, ensuring data protection and controlled user-access",
      ],
    },
    {
      title: "Drexel Catalog Scraper",
      roles: ["Back-End Developer"],
      period: "Jun 2024 - Jul 2024",
      link: "https://github.com/mahimamchacko/drexel-catalog-scraper",
      color: "bg-teal-200",
      tags: [
        "python",
        "sql",
        "beautifulsoup4",
        "requests",
        "pymongo",
        "venv",
        "mongodb",
        "mongodb compass",
        "github",
      ],
      bullets: [
        "Developed a web scraper to extract course data from Drexel University in Python and stored it in MongoDB",
        "Ensured data reliability by implementing data cleaning processes, enhancing accuracy and consistency",
        "Utilized tokenization techniques to parse and structure course data into a hierarchical tree",
        "Coordinated data updates to establish current dataset by integrating new entries and removing old ones",
      ],
    },
    {
      title: "Self-Care Sidequests",
      roles: ["Product Owner", "Full-Stack Developer"],
      period: "Jan 2022 - Jun 2022",
      link: "",
      color: "bg-emerald-200",
      tags: ["html", "css", "javascript", "firebase", "gitlab"],
      bullets: [
        "Collaborated with 3 peers to develop a productivity web app using HTML/CSS and JavaScript, empowering users to manage tasks and streamline workflows",
        "Applied Agile and Scrum methodologies to deliver features efficiently, organizing user stories and issues on a Kanban board",
        "Directed product development as Product Owner by prioritizing 12 user stories and 90+ issues, ensuring alignment with project goals",
        "Engineered core features, enabling seamless navigation and data management tailored to individual preferences",
      ],
    },
  ];

  return (
    <main className="container flex flex-col gap-8 md:gap-12 py-12">
      <h1>projects</h1>
      <div className="flex flex-col gap-6 md:gap-8">
        {projects.map(
          (
            project: {
              title: string;
              roles: string[];
              period: string;
              link: string;
              color: string;
              tags: string[];
              bullets: string[];
            },
            index
          ) => (
            <Card
              key={index}
              title={project.title}
              roles={project.roles}
              period={project.period}
              link={project.link}
              color={project.color}
              tags={project.tags}
              bullets={project.bullets}
            />
          )
        )}
      </div>
    </main>
  );
}

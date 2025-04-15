import Card from "@/components/card";

function GetProjects() {
  const projects = [
    {
      title: "SoundformX",
      roles: ["Full-Stack Developer"],
      period: "Sep 2024 - Jun 2025",
      link: "https://github.com/DP-Coder-11/soundformX",
      color: "bg-blue-200",
      tags: ["cpp", "juce", "projucer", "github", "xcode"],
      bullets: [
        "Collaborated with a team of 4 peers to develop a cross-platform audio application using C++ and JUCE, enabling users to import audio files, map them to a virtual MIDI keyboard, apply audio manipulations, record samples, and export them as WAV files",
        "Led the implementation of core components, focusing on a clean architecture and modular design and writing well-documented code to ensure maintainability and scalability",
        "Developed a virtual MIDI keyboard interface with responsive key highlighting and sound mapping, allowing users to assign audio files to specific keys and play them in real-time with low-latency",
      ],
    },
    {
      title: "Cherry",
      roles: ["Full-Stack Developer"],
      period: "Feb 2025 - Mar 2025",
      link: "https://github.com/mahimamchacko/cherry",
      color: "bg-sky-200",
      tags: [
        "typescript",
        "html",
        "css",
        "reactjs",
        "sql",
        "sqlite3",
        "materialui",
        "expressjs",
        "nodejs",
        "github",
        "visual studio code",
        "postman",
        "google maps api",
      ],
      bullets: [
        "Collaborated with a team of 2 peers to develop an social-networking web app using ReactJS and NodeJS, enabling users to create events and connect with others",
        "Engineered scalable RESTful API endpoints with ExpressJS and SQLite3, integrating middleware and routing to optimize backend performance and maintainability",
        "Implemented token-based authorization to secure the web app, ensuring data protection and controlled user-access",
        "Created event forms with Material UI and React Hook Form, allowing users to create and edit events seamlessly",
        "Integrated Google Maps API to display autocomplete suggestions for event locations and retrieve latitude and longitude coordinates, allowing users to easily set event locations and find their distance from the event",
      ],
    },
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
        "websockets",
        "ejs",
        "expressjs",
        "nodejs",
        "github",
        "visual studio code",
      ],
      bullets: [
        "Collaborated with a team of 2 peers to develop an e-commerce web app using NodeJS and PostgreSQL, enabling users to list auction items and place real-time bids",
        "Engineered scalable RESTful API endpoints with ExpressJS, integrating middleware and routing to optimize backend performance and maintainability",
        "Implemented token-based authorization to secure the web app, ensuring data protection and controlled user-access",
        "Created item pages, allowing users to view item details and place bids in real-time using WebSockets",
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
        "mongodb",
        "beautifulsoup4",
        "requests",
        "pymongo",
        "venv",
        "mongodb compass",
        "github",
        "visual studio code",
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

export default GetProjects;

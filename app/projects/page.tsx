import Card from "@/components/card";

export default function Projects() {
  const projects = [
    {
      title: "Drexel Catalog Scraper",
      roles: [
        "Back-End Developer"
      ],
      period: "Jul 2024 - Present",
      description: "A program to scrape data about courses at Drexel University then clean and store it",
      link: "https://github.com/mahimamchacko/drexel-catalog-scraper",
      color: "bg-amber-100",
      tags: [
        "python",
        "beautifulsoup4",
        "requests",
        "pymongo",
        "venv",
        "mongodb",
        "mongodb compass",
        "github"
      ]
    },
    {
      title: "Portfolio",
      roles: [
        "Front-End Developer",
      ],
      period: "Jun 2024 - Present",
      description: "A website to display my portfolio",
      link: "https://github.com/mahimamchacko/mahimamchacko.github.io",
      color: "bg-orange-100",
      tags: [
        "react",
        "typescript",
        "nextjs",
        "tailwind",
        "github"
      ]
    },
    {
      title: "Self-Care Sidequests",
      roles: [
        "Product Owner",
        "Full-Stack Developer"
      ],
      period: "Jan 2022 - Jun 2022",
      description: "A web app to manage daily tasks and improve productivity",
      link: "",
      color: "bg-red-100",
      tags: [
        "html",
        "css",
        "javascript",
        "firebase",
        "gitlab"
      ]
    }
  ]

  return (
    <main className="container flex flex-col gap-8 md:gap-12 py-12">
      <h1>projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project: { title: string, roles: string[], period: string, description: string, link: string, color: string, tags: string[] }, index) => (
          <Card key={index} title={project.title} roles={project.roles} period={project.period} description={project.description} link={project.link} color={project.color} tags={project.tags}/>
        ))}
      </div>
    </main>
  );
}
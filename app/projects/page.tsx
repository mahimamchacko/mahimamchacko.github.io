import Card from "@/components/card";

export default function Projects() {
  const cards = [
    {
      id: 1,
      title: "Drexel Catalog Scraper",
      period: "Jul 2024 - Present",
      description: "A program to scrape data about courses at drexel university then clean and store it",
      link: "https://github.com/mahimamchacko/drexel-catalog-scraper",
      color: "bg-red-200",
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
      id: 2,
      title: "Self-Care Sidequests",
      period: "Jul 2024 - Present",
      description: "A web app to manage daily tasks and improve productivity",
      link: "",
      color: "bg-orange-200",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map(({ id, title, period, description, link, color, tags }) => (
          <Card key={id} title={title} period={period} description={description} link={link} color={color} tags={tags}/>
        ))}
      </div>
    </main>
  );
}
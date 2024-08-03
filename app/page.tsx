import Badge from "@/components/badge";

export default function GetAbout() {
  const badges = [
    {
      color: "bg-emerald-200",
      text: "software developer"
    },
    {
      color: "bg-teal-200",
      text: "software engineer"
    },
    {
      color: "bg-cyan-200",
      text: "software programmer"
    },
    {
      color: "bg-sky-200",
      text: "student"
    },
  ];

  return (
    <main className="container flex flex-col gap-8 md:gap-12 py-12">
      <h1>mahima chacko</h1>
      <div className="flex flex-wrap gap-2">
        {badges.map((tag: { color: string, text: string }, index) => (
          <Badge key={index} color={tag.color}>
            <h6>{tag.text}</h6>
          </Badge>
        ))}
      </div>
    </main>
  );
}

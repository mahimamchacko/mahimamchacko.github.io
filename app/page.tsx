import Badge from "@/components/badge";

export default function Home() {
  const badges = [
    {
      id: 1,
      color: "bg-emerald-200",
      text: "software developer"
    },
    {
      id: 2,
      color: "bg-teal-200",
      text: "software engineer"
    },
    {
      id: 3,
      color: "bg-cyan-200",
      text: "software programmer"
    },
    {
      id: 4,
      color: "bg-sky-200",
      text: "student"
    },
  ];

  return (
    <main className="container flex flex-col gap-4 md:gap-6 py-12">
      <h1>mahima chacko</h1>
      <div className="flex flex-wrap gap-2">
        {badges.map(({ id, color, text }) => (
          <Badge key={id} color={color}>
            <h6>{text}</h6>
          </Badge>
        ))}
      </div>
    </main>
  );
}

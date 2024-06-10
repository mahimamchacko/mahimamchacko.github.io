import Badge from "@/components/badge";

export default function Home() {
  const badges = [
    {
      "id": 1,
      "color": "bg-emerald-200",
      "text": "software developer"
    },
    {
      "id": 2,
      "color": "bg-teal-200",
      "text": "software engineer"
    },
    {
      "id": 3,
      "color": "bg-cyan-200",
      "text": "software programmer"
    },
    {
      "id": 4,
      "color": "bg-sky-200",
      "text": "student"
    },
  ];

  return (
    <main className="container">
      <h1>mahima chacko</h1>
      <div className="flex flex-wrap gap-2 mt-3 mb-5">
        {badges.map(({ id, color, text }) => (
          <Badge key={id} color={color}>
            <h6>{text}</h6>
          </Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-bold">who am i?</p>
          <p>i'm a software engineering major with a minor in data science at drexel university. i'm passionate about creating innovate solutions to unique problems.</p>
        </div>
        <div>
          <p className="font-bold">what's my experience?</p>
          <p>i have industry experience in full-stack development. by working at susquehanna internation group, drexel university, and west chester area school district, i have been able to figure out what i want to do with my career.</p>
        </div>
        <div>
          <p className="font-bold">what're my projects?</p>
          <p>i've acted as the product owner in creating a web app with three other peers at drexel. outside of college, i aspire to learn new tools and technologies.</p>
        </div>
      </div>
    </main>
  );
}

import Timeline, { Experience } from "@/components/timeline";

export default function GetExperience() {
  const timelines = [
    {
      year: 2024,
      color: "bg-lime-200",
      experiences: [
        {
          title: "Software Developer - Instruments",
          company: "Susquehanna International Group",
          period: "Apr 2024 - Present",
          location: "Bala Cynwyd, PA",
          bullets: [
            "Develop a signaling system in C# with RabbitMQ to reliably send messages asynchronously between microservices, significantly enhancing system scalability and decoupling service interactions",
            "Implement concurrency to process 200k reference data records simultaneously, decreasing overhead by 88%",
            "Construct pipelines in C# and .NET to efficiently compare large volumes of data from diverse sources, streamlining data flow and facilitating timely data updates using Entity Framework",
            "Deploy microservices with Docker and Kubernetes to modularize architecture, boosting resilience and uptime",
            "Develop a .NET service to ingest data and expose it via GraphQL, improving query flexibility and performance",
            "Build apps to decommission 15+ legacy solutions and automate jobs in Tidal, reducing maintenance efforts",
          ],
        },
      ],
    },
    {
      year: 2023,
      color: "bg-yellow-200",
      experiences: [
        {
          title: "Software Developer - Corporate Systems",
          company: "Susquehanna International Group",
          period: "Mar 2023 - Sep 2023",
          location: "Bala Cynwyd, PA",
          bullets: [
            "Developed a web application using C# and ASP.NET MVC to map and filter 3,000 points in 8 locations",
            "Engineered REST APIs using Swagger and OData, enabling advanced querying and optimizing unit testing",
            "Implemented data caching with Redis to minimize database calls, achieving an improvement in response times",
            "Communicated with stakeholders to maintain and enhance application features based on their requirements",
            "Redesigned external website with content management system to optimize for modification and scalability",
            "Created unit tests with NUnit and Moq to ensure code reliability and and improve test coverage",
          ],
        },
      ],
    },
    {
      year: 2022,
      color: "bg-orange-200",
      experiences: [
        {
          title: "Senior IT Support Specialist",
          company: "Drexel University, College of Computing and Informatics",
          period: "Sep 2022 - Mar 2024",
          location: "Philadelphia, PA",
          bullets: [
            "Delegated tasks and trained coworkers to successfully complete responsibilities and strengthen their skills",
            "Managed 15-25 support tickets each week with RemedyForce, resolving software issues and supporting users",
            "Crafted clear and concise technical documentation for internal and external audiences, improving software usability",
            "Coordinated student and faculty events by preparing technical equipment and organizing materials",
            "Maintained reliability of recordings across 40+ classes by diligently monitoring and maintaining audio-visual technology",
          ],
        },
        {
          title: "Product Management Fellow",
          company: "SurbhiLately Product Management Fellowship",
          period: "Aug 2022 - Sep 2022",
          location: "Remote",
          bullets: [
            "Attended seminars to acquire essential Product Management skills and deepen understanding of the Product Management Life Cycle",
            "Evaluated Product Management scenarios by identifying and defining objectives, ensuring alignment with product goals",
            "Adopted a Product Manager mindset by prioritizing features and mastering launch strategy principles",
            "Analyzed case studies to enhance technological solutions and optimize product effectiveness",
            "Engaged with Product Management panelists to gain insights into their roles and explore diverse perspectives within the field",
          ],
        },
        {
          title: "IT Support Specialist",
          company: "Drexel University, College of Computing and Informatics",
          period: "Mar 2022 - Jun 2022",
          location: "Philadelphia, PA",
          bullets: [
            "Configured loaner computers by imaging them with SCCM software, enabling quick deployment and immediate use",
            "Optimized Microsoft Excel spreadsheets by integrating data validation and conditional formatting",
            "Managed asset distribution by overseeing computer and accessory loans, ensuring accurate tracking through an inventory system",
            "Utilized Microsoft Teams and Discord to effectively coordinate tasks and resolve issues",
          ],
        },
      ],
    },
    {
      year: 2021,
      color: "bg-red-200",
      experiences: [
        {
          title: "IT Intern",
          company: "West Chester Area School District",
          period: "May 2021",
          location: "West Chester, PA",
          bullets: [
            "Enhanced network infrastructure by constructing and configuring switches within the data center",
            "Provisioned and organized 30 wireless access points across schools, improving internet accessibility",
            "Developed PowerShell scripts to monitor real-time changes in group membership within Active Directory, improving security protocols",
            "Authored Ansible playbooks to efficiently parse and present date in a more digestible format",
          ],
        },
      ],
    },
  ];

  return (
    <div className="container flex flex-col gap-8 md:gap-12 py-12">
      <h1>experience</h1>
      <div className="flex flex-col gap-6 md:gap-8">
        {timelines.map(
          (
            timeline: {
              year: number;
              color: string;
              experiences: Experience[];
            },
            index
          ) => (
            <Timeline
              key={index}
              year={timeline.year}
              color={timeline.color}
              experiences={timeline.experiences}
            />
          )
        )}
      </div>
    </div>
  );
}

import Timeline, { Experience } from "@/components/timeline";

export default function GetExperience() {
  const timelines = [
    {
      year: 2024,
      color: "bg-lime-200",
      experiences: [
        {
          title: "Software Developer",
          company: "Susquehanna International Group (SIG)",
          period: "Apr 2024 - Present",
          location: "Bala Cynwyd, PA",
          bullets: [
            "Develop a signaling system with RabbitMQ to reliably send messages asynchronously between microservices, significantly enhancing system scalability and decoupling service interactions",
            "Implement concurrency to handle multiple tasks simultaneously, boosting performance and cutting processing time",
            "Construct pipelines to efficiently process large volumes of data from diverse sources, streamlining data flow and facilitating timely data updates",
            "Engineer and deploy microservices with Docker and Kubernetes to modularize application architecture, boosting resilience and maintainability",
            "Design GraphQL schemas and resolvers to ingest and expose data, improving query flexibility and performance",
            "Reduce maintenance efforts by decommissioning 15+ legacy apps/configurations and automating jobs"
          ]
        }
      ]
    },
    {
      year: 2023,
      color: "bg-yellow-200",
      experiences: [
        {
          title: "Software Developer",
          company: "Susquehanna International Group (SIG)",
          period: "Mar 2023 - Sep 2023",
          location: "Bala Cynwyd, PA",
          bullets: [
            "Refactored code and optimized databases across multiple applications to enhance performance and readability",
            "Engineered REST APIs using OData, enabling advanced querying capabilities and optimizing unit testing",
            "Implemented data caching with Redis to minimize database queries, achieving an improvement in response times",
            "Migrated 12+ applications to new servers and updated them to latest framework versions",
            "Redesigned external website with content management system to optimize for modification and scalability"
          ]
        }
      ]
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
            "Maintained reliability of recordings across 40+ classes by diligently monitoring and maintaining audio-visual technology"
          ]
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
            "Engaged with Product Management panelists to gain insights into their roles and explore diverse perspectives within the field"
          ]
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
            "Utilized Microsoft Teams and Discord to effectively coordinate tasks and resolve issues"
          ]
        }
      ]
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
            "Authored Ansible playbooks to efficiently parse and present date in a more digestible format"
          ]
        }
      ]
    }
  ]

  return (
    <div className="container flex flex-col gap-8 md:gap-12 py-12">
      <h1>experience</h1>
      <div className="flex flex-col gap-6 md:gap-8">
        {timelines.map((timeline: { year: number, color: string, experiences: Experience[] }, index) => (
          <Timeline key={index} year={timeline.year} color={timeline.color} experiences={timeline.experiences}/>
        ))}
      </div>
    </div>
  );
}

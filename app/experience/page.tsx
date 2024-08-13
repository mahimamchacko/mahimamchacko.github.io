import Timeline, { Experience } from "@/components/timeline";

export default function GetExperience() {
  const timelines = [
    {
      year: 2024,
      color: "bg-lime-200",
      experiences: [
        {
          title: "Software Developer",
          company: "Susquehanna International Group",
          period: "Apr 2024 - Present",
          location: "Bala Cynwyd, PA",
          bullets: []
        }
      ]
    },
    {
      year: 2023,
      color: "bg-yellow-200",
      experiences: [
        {
          title: "Software Developer",
          company: "Susquehanna International Group",
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
            "Organized student and faculty events by preparing technical equipment and assembling materials",
            "Maintained reliability of recordings across 40+ classes through monitoring and upkeep of audio-visual technology"
          ]
        },
        {
          title: "Product Management Fellow",
          company: "SurbhiLately Product Management Fellowship",
          period: "Aug 2022 - Sep 2022",
          location: "Remote",
          bullets: [
            "Participated in seminars to acquire key skills for Product Management and gain insights into the Product Management Life Cycle",
            "Assessed Product Management prompts by identifying and establishing objectives for each product",
            "Cultivated a Product Manager mindset by determining priority and value and mastering launch strategy principles",
            "Analyzed case studies to enhance technologies and optimize effectiveness",
            "Engaged in discussions with Product Management panelists to explore their roles and perspectives within the field"
          ]
        },
        {
          title: "IT Support Specialist",
          company: "Drexel University, College of Computing and Informatics",
          period: "Mar 2022 - Jun 2022",
          location: "Philadelphia, PA",
          bullets: [
            "Configured loaner computers by imaging them with SCCM software and deploying them for immediate use",
            "Enhanced Microsoft Excel spreadsheets by implementing data validation and conditional formatting",
            "Oversaw computer and accessory loans through asset management using an inventory system",
            "Employed Microsoft Teams and Discord for effective communication regarding tasks and issues"
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
            "Updated network infrastructure by constructing and connecting switches in the data center",
            "Provisioned and labeled 30 wireless access points across schools to facilitate internet access",
            "Developed PowerShell scripts to monitor changes in group membership within Active Directory and enhance security measures",
            "Created Ansible playbooks to parse and present data in a more digestible format"
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

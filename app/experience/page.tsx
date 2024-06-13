import Timeline from "@/components/timeline";

export default function Home() {
  const timelines = [
    {
      id: 4,
      year: 2024,
      color: "bg-lime-200",
      experiences: [
        {
          id: 1,
          title: "Software Developer",
          company: "Susquehanna International Group",
          period: "Apr 2024 - Present",
          location: "Bala Cynwyd, PA",
          bullets: []
        }
      ]
    },
    {
      id: 3,
      year: 2023,
      color: "bg-yellow-200",
      experiences: [
        {
          id: 1,
          title: "Software Developer",
          company: "Susquehanna International Group",
          period: "Mar 2023 - Sep 2023",
          location: "Bala Cynwyd, PA",
          bullets: [
            {
              id: 1,
              bullet: "Enhanced performance and readability by refactoring code and databases across 10+ applications"
            },
            {
              id: 2,
              bullet: "Engineered REST APIs utilizing OData to enable advanced querying capabilities in web apps and testing"
            },
            {
              id: 3,
              bullet: "Implemented data caching to minimize database calls and improve system performance"
            },
            {
              id: 4,
              bullet: "Redesigned external website with content management system to optimize for modification and scalability"
            },
            {
              id: 5,
              bullet: "Migrated 12+ web apps between servers and updated them to latest framework versions"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      year: 2022,
      color: "bg-orange-200",
      experiences: [
        {
          id: 3,
          title: "Senior IT Support Specialist",
          company: "Drexel University, College of Computing and Informatics",
          period: "Sep 2022 - Mar 2024",
          location: "Philadelphia, PA",
          bullets: [
            {
              id: 1,
              bullet: "Delegated tasks each shift and train student assistants to successfully complete responsibilities"
            },
            {
              id: 2,
              bullet: "Managed 15-25 support tickets each week with RemedyForce to solve issues with software"
            },
            {
              id: 3,
              bullet: "Organized student and faculty events by preparing technical equipment and assembling materials"
            },
            {
              id: 4,
              bullet: "Crafted clear and concise technical documentation for internal and external audiences"
            },
            {
              id: 5,
              bullet: "Maintained reliability of recordings across 40+ classes through monitoring and upkeep of audio-visual technology"
            }
          ]
        },
        {
          id: 2,
          title: "Product Management Fellow",
          company: "SurbhiLately Product Management Fellowship",
          period: "Aug 2022 - Sep 2022",
          location: "Remote",
          bullets: [
            {
              id: 1,
              bullet: "Participated in seminars to acquire key skills for Product Management and gain insights into the Product Management Life Cycle"
            },
            {
              id: 2,
              bullet: "Assessed Product Management prompts by identifying and establishing objectives for each product"
            },
            {
              id: 3,
              bullet: "Cultivated a Product Manager mindset by determining priority and value and mastering launch strategy principles"
            },
            {
              id: 4,
              bullet: "Analyzed case studies to enhance technologies and optimize effectiveness"
            },
            {
              id: 5,
              bullet: "Engaged in discussions with Product Management panelists to explore their roles and perspectives within the field"
            }
          ]
        },
        {
          id: 1,
          title: "IT Support Specialist",
          company: "Drexel University, College of Computing and Informatics",
          period: "Mar 2022 - Jun 2022",
          location: "Philadelphia, PA",
          bullets: [
            {
              id: 1,
              bullet: "Configured loaner computers by imaging them with SCCM software and deploying them for immediate use"
            },
            {
              id: 2,
              bullet: "Enhanced Microsoft Excel spreadsheets by implementing data validation and conditional formatting"
            },
            {
              id: 3,
              bullet: "Oversaw computer and accessory loans through asset management using an inventory system"
            },
            {
              id: 4,
              bullet: "Employed Microsoft Teams and Discord for effective communication regarding tasks and issues"
            }
          ]
        }
      ]
    },
    {
      id: 1,
      year: 2021,
      color: "bg-red-200",
      experiences: [
        {
          id: 1,
          title: "IT Intern",
          company: "West Chester Area School District",
          period: "May 2021",
          location: "West Chester, PA",
          bullets: [
            {
              id: 1,
              bullet: "Updated network infrastructure by constructing and connecting switches in the data center"
            },
            {
              id: 2,
              bullet: "Provisioned and labeled 30 wireless access points across schools to facilitate internet access"
            },
            {
              id: 3,
              bullet: "Developed PowerShell scripts to monitor changes in group membership within Active Directory and enhance security measures"
            },
            {
              id: 4,
              bullet: "Created Ansible playbooks to parse and present data in a more digestible format"
            }
          ]
        }
      ]
    }
  ]

  return (
    <div className="container flex flex-col gap-8 md:gap-10">
      <h1>experience</h1>
      <div className="flex flex-col gap-5 md:gap-7">
        {timelines.map(({ id, year, color, experiences }) => (
          <Timeline key={id} year={year} color={color} experiences={experiences}/>
        ))}
      </div>
    </div>
  );
}

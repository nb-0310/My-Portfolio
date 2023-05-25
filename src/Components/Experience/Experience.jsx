import SectionHeader from "../../Utils/SectionHeader";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Tax Tech India Pvt Ltd",
    position: "Software Application Developer",
    time: "March 2022 - December 2022",
    location: "Gandhinagar, Gujarat",
    description:
      "Developed and optimized SQL queries and scripts to extract, transform, and load data efficiently in a fast-paced environment and developed functional corporate tax forms for US clients. Collaborated with cross-functional teams to analyze database requirements, design schemas, and troubleshoot performance issues for enhanced data management.",
    tech: ["SQL", "MySQL", "C#", "Sharepoint"]
  },
  {
    title: "Fourarc Studio Pvt Ltd",
    position: "Full Stack Intern",
    time: "January 2022 - March 2022",
    location: "Ahmedabad, Gujarat",
    description:
      "As a Full Stack Intern, I focused on front-end development, creating responsive designs and improving user experience. I also developed back-end features including user authentication, sign in, and sign up functionality with password hashing using PHP and MySQL.",
    tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"]
  },
];

export default Experience
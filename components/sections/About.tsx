import AboutCard from "../cards/AboutCard";
import TitleCard from "../cards/TitleCard";
const aboutData = [
  {
    title: "Experience",
    subTitle: "I've spent my best time forever in Peacock India",
    data: [
      {
        heading: "Jr MERN Stack Developer",
        subHeading: "Peacock India, India",
        session: "10 Jan 2023 - 10 Apr 2024",
        duration: "1 Year 4 Months",
        link: "https://www.peacockindia.in",
      },
    ],
  },
  {
    title: "Education",
    data: [
      {
        heading: "Diploma In Computer Science & Technology",
        subHeading: "Bogura Polytechnic Institute, Bogura",
        session: "2017-2021",
        duration: "4 Years",
        link: "https://bogura.polytech.gov.bd",
      },
    ],
  },
  {
    title: "Courses",
    subTitle: "For Improve my knowledge & skills",
    data: [
      {
        heading: "Web Development",
        subHeading: "Programming-Hero",
        session: "Jun 2023 - Dec 2023",
        duration: "6 Months",
        link: "https://www.programming-hero.com",
      },
      {
        heading: "Programming Fundamentals",
        subHeading: "Phitron",
        session: "Jun 2023 - Dec 2023",
        duration: "1+ Year",
        link: "https://phitron.io",
      },
    ],
  },
];
const About = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20" id="about">
      <h2 className="text-3xl text-center font-bold text-primary dark:text-primary-foreground mb-5">
        About Me
      </h2>
      <div className="flex flex-col gap-8">
        {aboutData.map((aData) => (
          <div key={aData.title}>
            <TitleCard title={aData.title} subTitle={aData.subTitle} />
            <div>
              {aData.data.map((d) => (
                <AboutCard
                  key={d.heading}
                  heading={d.heading}
                  subHeading={d.subHeading}
                  session={d.session}
                  duration={d?.duration ? d.duration : ""}
                  link={d.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

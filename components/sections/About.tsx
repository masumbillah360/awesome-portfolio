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
      <div className="mb-5">
        <TitleCard
          title="About Me"
          textCenter
          subTitle="Feel free to adjust the language or add any additional details that
          reflect your personality and accomplishments!"
        />
      </div>
      <div className="text-center">
        <p>
          Hey there! I am{" "}
          <span className="font-bold text-primary dark:text-primary-foreground">
            Masum Billah
          </span>
          , a seasoned MERN (MongoDB, Express.js, React.js, Node.js, REST Api)
          developer with a passion for crafting robust, scalable web
          applications. With over 1.5 years of hands-on experience at Peacock
          India, I have honed my skills in cutting-edge technologies and
          frameworks, specializing in Next.js, React, Express, Node.js,
          TypeScript, and JavaScript. My journey in software development is not
          just about writing code; it is about solving complex problems
          creatively and efficiently. I thrive in challenging environments where
          I can leverage my problem-solving skills and expertise in data
          structures and algorithms (DSA) to architect elegant solutions.
          Whether it is building responsive user interfaces, optimizing backend
          performance, or architecting scalable server-side applications, I am
          committed to delivering high-quality solutions that exceed
          expectations. I am driven by a relentless pursuit of excellence,
          continuously learning and adapting to stay at the forefront of
          industry trends and best practices. Lets collaborate and turn your
          ideas into reality! Feel free to reach out to discuss how we can work
          together to bring your projects to life.
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-5">
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

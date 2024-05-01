import ProjectCard from "@/components/cards/ProjectCard";
import { projectLists } from "@/utils/projects";
import TitleCard from "../cards/TitleCard";

const Projects = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20" id="projects">
      <div className="mb-5">
        <TitleCard
          title="Projects"
          subTitle="I'm familiar with those disabled Framework and Library"
          textCenter
        />
      </div>
      <TitleCard
        title="Explore Some Projects"
        subTitle="I have created those projects using my own skill"
        seeAll={true}
        seeAllPath={"/all-projects"}
      />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 mt-5 sm:grid-cols-3 lg:grid-cols-4">
          {projectLists.map((project) => (
            <ProjectCard
              key={project.label}
              label={project.label}
              description={
                project.description.length > 30
                  ? project.description.slice(0, 30) + "..."
                  : project.description
              }
              imageUrl={project.imageUrl}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;

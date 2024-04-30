import {
  cssAndStyle,
  databaseList,
  frameworkAndLibraryList,
  ormList,
  programmingLanguage,
  toolsList,
} from "@/utils/skill";
import SkillCard from "../cards/SkillCard";
import TitleCard from "../cards/TitleCard";

const SkillSection = () => {
  return (
    <section id="skill" className="py-12 sm:py-16 lg:py-20">
      <h2 className="text-3xl text-center font-bold text-primary dark:text-primary-foreground mb-5">
        Skills
      </h2>
      <div className="px-4 mx-auto hidden md:block sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16">
          <div>
            <div className="mt-5 border rounded-md border-primary dark:border-primary-foreground">
              <TitleCard
                title="Programming & Language"
                subTitle="I'm familiar with those disabled Framework and Library"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-3 px-2 pb-2">
                {programmingLanguage.map((language) => (
                  <SkillCard
                    key={language.label}
                    label={language.label}
                    icon={language.icon}
                    familiar={language?.familiar}
                    url=" "
                  />
                ))}
              </div>
            </div>
            <div className="mt-10 border rounded-md border-primary dark:border-primary-foreground">
              <TitleCard
                title="Database"
                subTitle="I'm familiar with those disabled Framework and Library"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-3 px-2 pb-2">
                {databaseList.map((db) => (
                  <SkillCard
                    key={db.label}
                    label={db.label}
                    icon={db.icon}
                    url=" "
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 border rounded-md border-primary dark:border-primary-foreground">
              <TitleCard title="DB ORM" subTitle="Object Relational Mapping" />
              <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-3 px-2 pb-2">
                {ormList.map((orm) => (
                  <SkillCard
                    key={orm.label}
                    label={orm.label}
                    icon={orm.icon}
                    url=" "
                  />
                ))}
              </div>
            </div>
            <div className="mt-10 border rounded-md border-primary dark:border-primary-foreground">
              <TitleCard
                title="CSS & Style"
                subTitle="I'm familiar with those disabled Framework and Library"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-3 px-2 pb-2">
                {cssAndStyle.map((c) => (
                  <SkillCard
                    key={c.label}
                    label={c.label}
                    icon={c.icon}
                    familiar={c?.familiar}
                    url=" "
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mt-5 border rounded-md border-primary dark:border-primary-foreground">
              <TitleCard
                title="Framework & Library"
                subTitle="I'm familiar with those disabled Framework and Library"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-3 px-2 pb-2">
                {frameworkAndLibraryList.map((fl) => (
                  <SkillCard
                    key={fl.label}
                    label={fl.label}
                    icon={fl.icon}
                    familiar={fl?.familiar}
                    url=" "
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 border rounded-md border-primary dark:border-primary-foreground">
              <TitleCard title="Tools" subTitle="Object Relational Mapping" />
              <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-5 px-2 pb-2">
                {toolsList.map((tool) => (
                  <SkillCard
                    key={tool.label}
                    label={tool.label}
                    icon={tool.icon}
                    url=" "
                    familiar={tool.familiar}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view section  */}
      <div className="px-4 mx-auto md:hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 gap-x-16">
          <div className="mt-5 border rounded-md border-primary dark:border-primary-foreground">
            <TitleCard
              title="Programming & Language"
              subTitle="I'm familiar with those disabled Framework and Library"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-3 px-2 pb-2">
              {programmingLanguage.map((language) => (
                <SkillCard
                  key={language.label}
                  label={language.label}
                  icon={language.icon}
                  familiar={language?.familiar}
                  url=" "
                />
              ))}
            </div>
          </div>

          <div className="mt-5 border rounded-md border-primary dark:border-primary-foreground">
            <TitleCard
              title="Framework & Library"
              subTitle="I'm familiar with those disabled Framework and Library"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-3 px-2 pb-2">
              {frameworkAndLibraryList.map((fl) => (
                <SkillCard
                  key={fl.label}
                  label={fl.label}
                  icon={fl.icon}
                  familiar={fl?.familiar}
                  url=" "
                />
              ))}
            </div>
          </div>

          <div className="mt-10 border rounded-md border-primary dark:border-primary-foreground">
            <TitleCard
              title="Database"
              subTitle="I'm familiar with those disabled Framework and Library"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-3 px-2 pb-2">
              {databaseList.map((db) => (
                <SkillCard
                  key={db.label}
                  label={db.label}
                  icon={db.icon}
                  url=" "
                />
              ))}
            </div>
          </div>

          <div className="mt-10 border rounded-md border-primary dark:border-primary-foreground">
            <TitleCard title="DB ORM" subTitle="Object Relational Mapping" />
            <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-3 px-2 pb-2">
              {ormList.map((orm) => (
                <SkillCard
                  key={orm.label}
                  label={orm.label}
                  icon={orm.icon}
                  url=" "
                />
              ))}
            </div>
          </div>

          <div className="mt-10 border rounded-md border-primary dark:border-primary-foreground">
            <TitleCard
              title="CSS & Style"
              subTitle="I'm familiar with those disabled Framework and Library"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-3 px-2 pb-2">
              {cssAndStyle.map((c) => (
                <SkillCard
                  key={c.label}
                  label={c.label}
                  icon={c.icon}
                  familiar={c?.familiar}
                  url=" "
                />
              ))}
            </div>
          </div>

          <div className="mt-10 border rounded-md border-primary dark:border-primary-foreground">
            <TitleCard title="Tools" subTitle="Object Relational Mapping" />
            <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mt-5 px-2 pb-2">
              {toolsList.map((tool) => (
                <SkillCard
                  key={tool.label}
                  label={tool.label}
                  icon={tool.icon}
                  url=" "
                  familiar={tool.familiar}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;

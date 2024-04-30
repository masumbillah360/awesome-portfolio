import { BsCloudDrizzle } from "react-icons/bs";
import {
  SiAidungeon,
  SiAndroidstudio,
  SiAwsfargate,
  SiBootstrap,
  SiBun,
  SiC,
  SiClerk,
  SiCplusplus,
  SiCss3,
  SiDart,
  SiDjango,
  SiExpress,
  SiFastify,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNetlify,
  SiNodedotjs,
  SiPostcss,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiRailway,
  SiReact,
  SiSocketdotio,
  SiSqlite,
  SiSwagger,
  SiTailwindcss,
  SiTrpc,
  SiTurso,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

import { GrMysql } from "react-icons/gr";
import { TbBinaryTree, TbBrandNextjs } from "react-icons/tb";
export const programmingLanguage = [
  { label: "HTML", icon: <SiHtml5 size={23} color="#017ACC" /> },
  { label: "Typescript", icon: <SiTypescript size={23} color="#017ACC" /> },
  { label: "Javascript", icon: <SiJavascript size={23} color="#F0DB4F" /> },
  { label: "Node", icon: <SiNodedotjs size={23} color="#579035" /> },
  {
    label: "C Programming",
    icon: (
      <SiC
        color="white"
        height={16}
        width={16}
        className="bg-blue-600 rounded-full p-1 w-full h-full"
      />
    ),
  },
  { label: "C++", icon: <SiCplusplus color="#608BC3" size={23} /> },
  { label: "DSA", icon: <TbBinaryTree color="#608BC3" size={23} /> },
  { label: "Dart", icon: <SiDart color="#035597" size={23} />, familiar: true },
  {
    label: "Python",
    icon: <SiPython color="#035597" size={23} />,
    familiar: true,
  },
];

export const frameworkAndLibraryList = [
  { label: "NEXT JS", icon: <TbBrandNextjs size={23} /> },
  { label: "React", icon: <SiReact size={23} color="#5ED5F6" /> },
  { label: "Express", icon: <SiExpress size={23} color="#7E7E7E" /> },
  { label: "Fastify", icon: <SiFastify size={23} /> },
  { label: "Hono", icon: <SiBun size={23} color="#F3E8D8" /> },
  { label: "Web Socket", icon: <SiSocketdotio size={23} color="#00ffff" /> },
  { label: "tRPC", icon: <SiTrpc size={23} color="#3489C6" /> },
  { label: "Swagger", icon: <SiSwagger size={23} color="#709d53" /> },
  { label: "Firebase", icon: <SiFirebase size={23} color="#f1c23b" /> },
  { label: "Clerk", icon: <SiClerk size={23} color="#18b9f6" /> },
  {
    label: "Nest JS",
    icon: <SiNestjs size={23} color="#d71f4a" />,
    familiar: true,
  },
  {
    label: "Flutter",
    icon: <SiFlutter size={23} color="#5DC3F0" />,
    familiar: true,
  },
  {
    label: "Djanog",
    icon: <SiDjango size={23} color="#2BA978" />,
    familiar: true,
  },
  { label: "Flask", icon: <SiFlask size={23} />, familiar: true },
];

export const databaseList = [
  { label: "MongoDB", icon: <SiMongodb size={23} color="#579035" /> },
  { label: "SQLite", icon: <SiSqlite size={23} color="#08425D" /> },
  { label: "PostgreSQL", icon: <SiPostgresql size={23} color="#396B94" /> },
  { label: "MySQL", icon: <GrMysql size={23} color="#F29418" /> },
  { label: "Firebase", icon: <SiFirebase size={23} color="#f1c23b" /> },
  { label: "Turso", icon: <SiTurso size={23} color="#55F8D3" /> },
];
export const ormList = [
  { label: "Mongoose", icon: <SiMongoose size={23} color="#402A1A" /> },
  { label: "Prisma", icon: <SiPrisma size={23} color="#1E8E81" /> },
  { label: "Drizzle", icon: <BsCloudDrizzle size={23} color="#BFEF4D" /> },
];

export const cssAndStyle = [
  { label: "CSS", icon: <SiCss3 size={23} color="#402A1A" /> },
  { label: "Tailwind", icon: <SiTailwindcss size={23} color="#1E8E81" /> },
  { label: "Bootstrap", icon: <SiBootstrap size={23} color="#1E8E81" /> },
  {
    label: "SCSS",
    icon: <SiPostcss size={23} color="#BFEF4D" />,
    familiar: true,
  },
];

export const toolsList = [
  { label: "VS Code", icon: <SiVisualstudiocode size={23} color="#396B94" /> },
  { label: "GitHub", icon: <SiGithub size={23} /> },
  { label: "Gitlab", icon: <SiGitlab size={23} color="#f97926" /> },
  { label: "AWS", icon: <SiAwsfargate size={23} color="#f97926" /> },
  { label: "Vercel", icon: <SiVercel size={23} /> },
  { label: "Figma", icon: <SiFigma size={23} color="#fe7262" /> },
  { label: "Postman", icon: <SiPostman size={23} color="#ee5722" /> },
  { label: "Api Dog", icon: <SiAidungeon size={23} color="#4396ff" /> },
  { label: "Netlify", icon: <SiNetlify size={23} color="#65a29f" /> },
  { label: "Railway", icon: <SiRailway size={23} /> },
  {
    label: "Android Studio",
    icon: <SiAndroidstudio size={23} color="#587aae" />,
    familiar: true,
  },
];

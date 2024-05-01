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
  {
    label: "HTML",
    icon: <SiHtml5 size={23} color="#017ACC" />,
    description: "HyperText Markup Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "Typescript",
    icon: <SiTypescript size={23} color="#017ACC" />,
    description: "TypeScript is JavaScript with syntax for types",
    url: "https://www.typescriptlang.org",
  },
  {
    label: "Javascript",
    icon: <SiJavascript size={23} color="#F0DB4F" />,
    description:
      "JavaScript (JS) is a programming language and core technology of the Web, alongside HTML and CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    label: "Node",
    icon: <SiNodedotjs size={23} color="#579035" />,
    description:
      "Node.js is an open source server environment that uses JavaScript on the server.",
    url: "https://nodejs.org/en",
  },
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
    description:
      "C is a general-purpose, structured, and machine-independent language that is widely used for system software and complex programs",
    url: "https://www.cprogramming.com/",
  },
  {
    label: "C++",
    icon: <SiCplusplus color="#608BC3" size={23} />,
    description: "C++: A Versatile Programming Language",
    url: "https://isocpp.org/",
  },
  {
    label: "DSA",
    icon: <TbBinaryTree color="#608BC3" size={23} />,
    description:
      "DSA is the study of organizing and manipulating data efficiently.",
  },
  {
    label: "Dart",
    icon: <SiDart color="#035597" size={23} />,
    familiar: true,
    description:
      "Dart is a free and open source language for high-quality apps on any platform",
    url: "https://dart.dev/",
  },
  {
    label: "Python",
    icon: <SiPython color="#035597" size={23} />,
    familiar: true,
    description:
      "Python is a high-level, interpreted, object-oriented language that is easy to learn and use",
    url: "https://www.python.org/",
  },
];

export const frameworkAndLibraryList = [
  {
    label: "NEXT JS",
    icon: <TbBrandNextjs size={23} />,
    description:
      "Next.js is a full-stack React framework that enables you to create high-quality web applications",
    url: "https://nextjs.org/",
  },
  {
    label: "React",
    icon: <SiReact size={23} color="#5ED5F6" />,
    description: "The library for web and native user interfaces",
    url: "https://react.dev/",
  },
  {
    label: "Express",
    icon: <SiExpress size={23} color="#7E7E7E" />,
    description:
      "Express is a fast and flexible web framework for Node.js that supports web and mobile applications, APIs, and performance",
    url: "https://expressjs.com/",
  },
  {
    label: "Fastify",
    icon: <SiFastify size={23} />,
    description: "Fast and low overhead web framework, for Node.js",
    url: "https://fastify.dev/",
  },
  {
    label: "Hono",
    icon: <SiBun size={23} color="#F3E8D8" />,
    description: "Hono - Ultrafast web framework for the Edges",
    url: "https://hono.dev/",
  },
  {
    label: "Web Socket",
    icon: <SiSocketdotio size={23} color="#00ffff" />,
    description:
      "WebSocket is a bidirectional communication protocol that allows data to be sent from the client to the server",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  },
  {
    label: "tRPC",
    icon: <SiTrpc size={23} color="#3489C6" />,
    description:
      "tRPC is a framework that lets you create end-to-end typesafe APIs with TypeScript inference.",
    url: "https://trpc.io/",
  },
  {
    label: "Swagger",
    icon: <SiSwagger size={23} color="#709d53" />,
    description: "API Documentation & Design Tools",
    url: "https://swagger.io/",
  },
  {
    label: "Firebase",
    icon: <SiFirebase size={23} color="#f1c23b" />,
    description:
      "Firebase is a platform that helps you build and grow apps and games users love, with fully managed backend",
    url: "https://firebase.google.com/",
  },
  {
    label: "Clerk",
    icon: <SiClerk size={23} color="#18b9f6" />,
    description:
      "Clerk is a suite of components and services to authenticate and manage your users with flexible and secure options",
    url: "https://clerk.com/",
  },
  {
    label: "Nest JS",
    icon: <SiNestjs size={23} color="#d71f4a" />,
    familiar: true,
    description:
      "NestJS is an open source platform that helps you build efficient, reliable and scalable server-side applications with TypeScript and Node.js",
    url: "https://nestjs.com/",
  },
  {
    label: "Flutter",
    icon: <SiFlutter size={23} color="#5DC3F0" />,
    familiar: true,
    description:
      "Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.",
    url: "https://flutter.dev/",
  },
  {
    label: "Djanog",
    icon: <SiDjango size={23} color="#2BA978" />,
    familiar: true,
    description:
      "Django makes it easier to build better web apps more quickly and with less code.",
    url: "https://www.djangoproject.com/",
  },
  {
    label: "Flask",
    icon: <SiFlask size={23} />,
    familiar: true,
    url: "https://flask.palletsprojects.com/en/3.0.x/",
    description:
      "Flask is a lightweight and flexible web framework for Python that follows the UNIX philosophy of doing one thing well",
  },
];

export const databaseList = [
  {
    label: "MongoDB",
    icon: <SiMongodb size={23} color="#579035" />,
    description:
      "MongoDB is a source-available, cross-platform, document-oriented database program",
    url: "https://www.mongodb.com/",
  },
  {
    label: "SQLite",
    icon: <SiSqlite size={23} color="#08425D" />,
    description:
      "SQLite is the most used database engine in the world, built into all mobile phones and most computers",
    url: "https://www.sqlite.org/index.html",
  },
  {
    label: "PostgreSQL",
    icon: <SiPostgresql size={23} color="#396B94" />,
    description:
      "PostgreSQL is a powerful, open source object-relational database system",
    url: "https://www.postgresql.org/",
  },
  {
    label: "MySQL",
    icon: <GrMysql size={23} color="#F29418" />,
    description:
      "MySQL is an open-source relational database management system (RDBMS) that uses SQL (Structured Query Language) for managing and querying databases.",
    url: "https://www.mysql.com/",
  },
  {
    label: "Firestore",
    icon: <SiFirebase size={23} color="#f1c23b" />,
    description:
      "Cloud Firestore lets you store and sync data for mobile, web, and server development with realtime listeners and offline support",
    url: "https://firebase.google.com/docs/firestore/",
  },
  {
    label: "Turso",
    icon: <SiTurso size={23} color="#55F8D3" />,
    description:
      "Turso is a platform that lets you build and integrate SQLite into your production applications with scalable per-tenant database architecture",
    url: "https://turso.tech/",
  },
];

export const ormList = [
  {
    label: "Mongoose",
    icon: <SiMongoose size={23} color="#402A1A" />,
    description:
      "Mongoose is an elegant MongoDB object modeling tool designed to work in an asynchronous environment, making it easier to work with MongoDB in Node.js applications by providing a schema-based solution for modeling application data.",
    url: "https://mongoosejs.com/",
  },
  {
    label: "Prisma",
    icon: <SiPrisma size={23} color="#1E8E81" />,
    description:
      "Prisma is a modern database toolkit that simplifies database access and management by providing a type-safe and auto-generated query builder for TypeScript and Node.js applications, offering features such as schema migrations, type-safe database access, and a powerful query API",
    url: "https://www.prisma.io/",
  },
  {
    label: "Drizzle",
    icon: <BsCloudDrizzle size={23} color="#BFEF4D" />,
    description:
      "Drizzle ORM is a lightweight and performant TypeScript ORM that supports all major serverful and serverless runtimes and database drivers",
    url: "https://orm.drizzle.team/",
  },
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

import Link from "next/link";

interface Props {
  heading: string;
  subHeading: string;
  session: string;
  duration?: string;
  link: string;
}
const AboutCard = ({ heading, subHeading, session, duration, link }: Props) => {
  return (
    <div className="px-10 rounded-lg py-5 bg-gray-100 dark:bg-gray-600 md:ml-10 mt-3 shadow-md">
      <h2 className="text-3xl font-bold font-serif">{heading}</h2>
      <div className="mt-1 ml-5">
        <Link
          href={link}
          target="_blank"
          className="text-xl font-semibold text-primary dark:text-primary-foreground"
        >
          {subHeading}
        </Link>
        <div className="mt-1 font-light flex justify-start items-center gap-5">
          {session}{" "}
          {duration && (
            <p className="font-light">
              <span className="">Duration:</span>{" "}
              <span className="font-semibold">{duration}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;

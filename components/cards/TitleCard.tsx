import Link from "next/link";

interface Props {
  title: string;
  subTitle?: string;
  seeAll?: boolean;
  seeAllPath?: string;
  textCenter?: boolean;
}
const TitleCard = ({
  title,
  subTitle,
  seeAll,
  seeAllPath,
  textCenter,
}: Props) => {
  return (
    <div
      className={`px-3 py-5 bg-primary dark:bg-gray-700 rounded-sm rounded-b-none relative ${
        textCenter ? "text-center" : "text-start"
      }`}
    >
      <div className="text-white">
        <h2 className="font-semibold text-2xl">{title}</h2>
        {subTitle && <p className="font-light">{subTitle}</p>}
      </div>
      {seeAll && (
        <Link
          href={seeAllPath as string}
          className="absolute top-1 right-2 cursor-pointer text-primary dark:text-primary-foreground"
        >
          See All
        </Link>
      )}
    </div>
  );
};

export default TitleCard;

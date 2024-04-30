import Link from "next/link";

interface Props {
  title: string;
  subTitle?: string;
  seeAll?: boolean;
  seeAllPath?: String;
}
const TitleCard = ({ title, subTitle, seeAll, seeAllPath }: Props) => {
  return (
    <div className="px-3 py-5 bg-primary dark:bg-primary-foreground rounded-sm rounded-b-none relative">
      <div className=" text-white dark:text-black">
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

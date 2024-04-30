import Link from "next/link";
import React from "react";
interface Props {
  label: string;
  icon: React.ReactElement;
  familiar?: boolean;
  url: string;
}
const SkillCard = ({ label, icon, familiar, url }: Props) => {
  return (
    <Link
      href={url}
      target="_blank"
      className={`flex items-center ${
        familiar ? "bg-gray-400" : ""
      } p-4 border border-gray-300 rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-grow pl-4">
        <p className={`text-sm font-bold ${familiar ? "text-gray-500" : ""}`}>
          {label}
        </p>
      </div>
    </Link>
  );
};

export default SkillCard;

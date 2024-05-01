import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
interface Props {
  label: string;
  icon: React.ReactElement;
  familiar?: boolean;
  url: string;
  description?: string;
}
const SkillCard = ({ label, icon, familiar, url, description }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={url}
            target="_blank"
            className={`flex items-center ${
              familiar ? "bg-gray-400" : "dark:bg-gray-700"
            } p-4 border border-gray-300 rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out`}
          >
            <div className="flex-shrink-0">{icon}</div>
            <div className="flex-grow pl-4">
              <p
                className={`text-sm font-bold ${
                  familiar ? "text-gray-500" : ""
                }`}
              >
                {label}
              </p>
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <div className="w-44 font-light">{description ?? label}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillCard;

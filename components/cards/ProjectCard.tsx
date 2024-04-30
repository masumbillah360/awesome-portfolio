"use client";
import Image from "next/image";
import React from "react";

interface Props {
  label: string;
  description: string;
  imageUrl: string;
  icon: React.ReactElement;
}

const ProjectCard = ({ label, description, imageUrl, icon }: Props) => {
  return (
    <div>
      <div className="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2 shadow-md">
        <Image
          height={200}
          width={400}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
          src={imageUrl}
          alt={label}
        />
        <div className="px-2 py-4">
          <div className="font-bold text-xl mb-2 flex items-center justify-start gap-2">
            {label}
            {icon}
          </div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

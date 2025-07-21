/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

export const ProjectsList = ({ projects }: { projects: any[] }) => {

  console.log(projects);

  return (
    <div className="space-y-6 ">

      <p>Jestem w trakcie uzupełniania portfolio, więc nie wszystkie projekty są tutaj jeszcze dostępne :&#41; </p>

      {projects.map((project) => {
        const { title, thumbnail, technologies, url, shortDescription } =
          project;

        return (
          <div key={project.id} className="p-4 border rounded-md flex flex-col lg:flex-row gap-6 items-start">
            <div className="w-full lg:w-1/3 lg:max-w-[180px]">
                {thumbnail?.url && (
                <Image
                  src={`https://api.lukaszkaliszewicz.pl${thumbnail.url}`}
                  alt={title}
                  width={200}
                  height={10}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100%, 33vw"
                  className="mb-4 rounded shadow-md w-auto object-cover"
                  loading="lazy"
                  style={{objectFit: "cover", maxHeight: "100%", maxWidth: "100%"}}
                />
                )}
            </div>
            <div className="flex flex-col gap-1 lg:w-2/3">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-base">{shortDescription}</p>
              <div className="mt-2 text-[var(--subtext)]">
                <strong className="">Technologie:</strong>{" "}
                {technologies
                  .map((tech: any) => tech.name)
                  .join(", ")}
              </div>
              <Button asChild className="w-fit mt-3" variant="outline">
                <Link href={`/projekty/${project.slug as string}`} >
                  Zobacz szczegóły <MoveRight /> 
                </Link>
              </Button>
              </div>
          </div>
        );
      })}
    </div>
  );
};

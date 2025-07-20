/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState, useTransition } from "react";
import { ProjectsList } from "../ProjektList";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/strapi";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";

type Technology = {
  id: number;
  name: string;
  slug: string;
};

export const ProjectsClient = ({
  technologies,
}: {
  technologies: Technology[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [projects, setProjects] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  //  filtry z URL
  const selectedTechs = searchParams.get("tech")?.split(",").filter(Boolean) || [];
  const isDoneParam = searchParams.get("done");
  const isDone = isDoneParam === "true" ? true : isDoneParam === "false" ? false : null;

  // projekty na podstawie URL
  useEffect(() => {
    startTransition(() => {
      getProjects({
        technologies: selectedTechs,
        isDone: isDone ?? undefined,
        operator: "and",
      }).then(setProjects);
    });
  }, [searchParams.toString()]);

  // Aktualizacja URL
  const updateUrl = (newTechs: string[], done: boolean | null) => {
    const query = qs.stringify(
      {
        tech: newTechs.length ? newTechs : undefined,
        done: done !== null ? done : undefined,
      },
      { arrayFormat: "comma", encodeValuesOnly: true }
    );

    router.push(`?${query}`, { scroll: false });
  };

  const toggleTech = (slug: string) => {
    const next = selectedTechs.includes(slug)
      ? selectedTechs.filter((s) => s !== slug)
      : [...selectedTechs, slug];

    updateUrl(next, isDone);
  };

  const toggleIsDone = (value: boolean | null) => {
    updateUrl(selectedTechs, isDone === value ? null : value);
  };

  return (
    <div className=" mx-auto py-8 space-y-8 ">
      <h1 className="text-3xl font-bold">Projekty</h1>

      {/*  Filtry technologii */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Button
            key={tech.slug}
            variant={selectedTechs.includes(tech.slug) ? "default" : "outline"}
            size="sm"
            onClick={() => toggleTech(tech.slug)}
          >
            {tech.name}
          </Button>
        ))}
      </div>

      {/*  Filtry zakończenia */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={isDone === true ? "default" : "outline"}
          size="sm"
          onClick={() => toggleIsDone(true)}
        >
          ✅ Zakończone
        </Button>
        <Button
          variant={isDone === false ? "default" : "outline"}
          size="sm"
          onClick={() => toggleIsDone(false)}
        >
          🚧 W trakcie
        </Button>
        <Button
          variant={isDone === null ? "default" : "outline"}
          size="sm"
          onClick={() => toggleIsDone(null)}
        >
          🔁 Wszystkie
        </Button>
      </div>

      {/*  Loader lub lista */}
      {isPending ? (
        <div className="flex justify-center items-center h-32 animate-pulse">
          <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
        </div>
      ) : (
        <ProjectsList projects={projects} />
      )}
    </div>
  );
};

import { Suspense } from "react";
import { ProjectsClient } from "@/components/projects/ProjectsClient";
import { getAllTechnologies } from "@/lib/strapi";

export default async function ProjektyPage() {
  const technologies = await getAllTechnologies();

  return (
    <div className="content-container xl:w-[90%] min-h-[80svh]">
      <Suspense fallback={<div>Ładowanie projektów...</div>}>
        <ProjectsClient technologies={technologies} />
      </Suspense>
    </div>
  );
}

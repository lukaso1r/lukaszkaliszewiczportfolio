import { ProjectsClient } from "@/components/projects/ProjectsClient";
import { getAllTechnologies } from "@/lib/strapi";

export default async function ProjektyPage() {
  const technologies = await getAllTechnologies();

  return (
    <div className="content-container min-h-[80svh]">
        <ProjectsClient technologies={technologies} />
    </div>
  );
}

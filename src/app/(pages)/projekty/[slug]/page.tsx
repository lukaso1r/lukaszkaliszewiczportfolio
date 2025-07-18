import { getProjectBySlug } from "@/lib/strapi";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound(); // 404
  }

  console.log(project.thumbnail.url);

  const { title, description, technologies, url, thumbnail, repository } = project;

  return (
    <div className="content-container mx-auto px-4 py-8 gap-4 flex flex-col">

        <div className="flex flex-row gap-8 items-center border rounded-md p-4">

            <div className="w-32">
                {thumbnail?.url && (
                    <img
                    src={`https://api.lukaszkaliszewicz.pl${thumbnail.url}`}
                    alt={title}
                    className="mb-4 rounded shadow-md"
                    />
                )}
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold mb-1">{title}</h1>
            
                <div className="text-[var(--subtext)]">
                    <strong>Technologie:</strong>{" "}
                    {technologies.map((t: any) => t.name).join(", ")}
                </div>
                <div className="flex flex-row gap-10">
                    <div>
                        <a
                            href={url}
                            className="block text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link do projektu →
                        </a>
                        <a href="url" className="text-[var(--subtext)] no-underline">{url}</a>
                    </div>
                    <div>
                        <a
                            href={url}
                            className="block text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link do repozytorium →
                        </a>
                        <a href="url" className="text-[var(--subtext)] no-underline">{repository}</a>
                    </div>
                </div>
            </div>
            
            
        </div>


      <div className="flex flex-col gap-4 prose ">
        <h2 className="text-2xl font-semibold">Opis projektu</h2>
        {description ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {description}
            </ReactMarkdown>
        ) : (
            <p>Opis wkrótce się pojawi</p>
        )}
    </div>
      

      
    </div>
  );
}

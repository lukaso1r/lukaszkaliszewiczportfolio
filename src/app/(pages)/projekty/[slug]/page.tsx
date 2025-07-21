'use server';

import { getProjectBySlug } from "@/lib/strapi";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { title, description, technologies, url, thumbnail, repository } = project;

  return (
    <div className="content-container mx-auto px-4 py-8 gap-4 flex flex-col">
      <Link href="/projekty" className="text-[] underline mb-4">
        ← Wróć do listy projektów
      </Link>
      <div className="flex flex-col lg:flex-row gap-8 items-center border rounded-md p-4">
        <div className="w-full lg:w-1/5">
          {thumbnail?.url && (
            <Image
              src={`https://api.lukaszkaliszewicz.pl${thumbnail.url}`}
              alt={title}
              width={270}
              height={128}
              className="rounded shadow-md w-full lg:w-auto"
              loading="lazy"
              sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 33vw"
              style={{maxHeight: "100%", maxWidth: "100%" }}
            />
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold mb-1">{title}</h1>
          <div className="text-[var(--subtext)]">
            <strong>Technologie:</strong>{" "}
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {technologies.map((t: any) => t.name).join(", ")}
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div>
              
              {url && (<>
                <Link href={url} className="block text-blue-500 underline">
                  Link do projektu →
                </Link>
                <Link href={url} className="text-[var(--subtext)] no-underline">
                  {url}
                </Link>
              </>)}
              


            </div>
            <div>
              {repository && (<>
                <Link
                  href={repository}
                  className="block text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link do repozytorium →
                </Link>
                <Link href={repository} className="text-[var(--subtext)] no-underline">
                  {repository}
                </Link>
              </>)}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 prose leading-8">
        {description ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}
            components={{
              h3: ({...props}) => <h3 className="text-2xl font-semibold" {...props} />,
              p: ({...props}) => <p className="leading-8" {...props} />,
              tr: ({...props}) => <tr className="border-white" {...props} />,
              td: ({...props}) => <td className="border border-white px-4 py-2" {...props} />,
              th: ({...props}) => <th className="border border-white px-4 py-2" {...props} />,
              table: ({...props}) => <table className="border-collapse border border-white w-fit" {...props} />,
          }}
          
          >
            {description}
          </ReactMarkdown>
        ) : (
          <p>Opis wkrótce się pojawi</p>
        )}
      </div>
    </div>
  );
}

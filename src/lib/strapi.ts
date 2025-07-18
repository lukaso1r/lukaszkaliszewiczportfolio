// lib/strapi.ts
import qs from 'qs';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchAPI = async (
  path: string,
  urlParamsObject: Record<string, any> = {},
  options: RequestInit = {}
) => {
  const queryString = qs.stringify(urlParamsObject, {
    encodeValuesOnly: true, // najważniejsze!
  });

    const requestUrl = `${API_URL}${path}${queryString ? `?${queryString}` : ""}`;
    console.log(`Fetching URL: ${requestUrl}`); // Debugging line

  const res = await fetch(requestUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!res.ok) {
    console.error(`Error response: ${res.status} ${res.statusText}`);
    throw new Error(`API error: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};


export const getProjects = async (
  filters: {
    isDone?: boolean;
    technologies?: string[];
    operator?: 'and' | 'or';
  } = {}
) => {
  const { isDone, technologies, operator = 'and' } = filters;

  const query: any = {
    populate: ['technologies', 'thumbnail'],
    sort: ['realizationDate:desc'],
    filters: {},
  };

  if (typeof isDone === 'boolean')
    query.filters.isDone = { $eq: isDone };

  if (technologies?.length) {
    query.filters.technologies = {
      [`$${operator}`]: technologies.map((slug) => ({ slug: { $eq: slug } })),
    };
  }

  const res = await fetchAPI('/projekts', query);
  return res?.data?.map((project: any) => ({
    id: project.id,
    ...project,
  })) || [];
};

export const getProjectBySlug = async (slug: string) => {
  const data = await fetchAPI('/projekts', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: ['technologies', 'thumbnail'],
  });

  // Pojedynczy projekt (jeśli jest)
  return data?.data?.[0] || null;
};

export const getAllTechnologies = async () => {
  const res = await fetchAPI('/technologies', {
    sort: ['name:asc'],
  });
  return res?.data?.map((tech: any) => ({
    id: tech.id,
    ...tech,
  })) || [];
};

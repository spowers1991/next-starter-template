import { revalidatePath } from 'next/cache';

// Map Sanity _type to route base paths
const typeToPath: Record<string, string> = {
  post: '/blog',
  movie: '/movies',
  person: '/persons',
};

export async function POST(req: Request) {
  const body = await req.json();
/*
  // Optional: check a secret for security
  if (body.secret !== process.env.REVALIDATE_SECRET) {
    console.log(body.secret, process.env.REVALIDATE_SECRET);
    return Response.json({ message: 'Invalid secret' }, { status: 401 });
  }
*/
  const docType = body._type;
  const slug = body.slug?.current;

  // Determine which path(s) to revalidate
  const pathsToRevalidate: string[] = [];
  if (docType && typeToPath[docType]) {
    // Revalidate the archive/listing page
    pathsToRevalidate.push(typeToPath[docType]);
    // Revalidate the detail page if slug exists
    if (slug) {
      pathsToRevalidate.push(`${typeToPath[docType]}/${slug}`);
    }
  }

  // Fallback: revalidate homepage if nothing else
  if (pathsToRevalidate.length === 0) {
    pathsToRevalidate.push('/');
  }

  // Revalidate all relevant paths
  await Promise.all(pathsToRevalidate.map((path) => revalidatePath(path)));

  return Response.json({ revalidated: true, paths: pathsToRevalidate });
}
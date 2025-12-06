import { generateStaticParamsForType } from "@/lib/sanity/ssg/generateStaticParams";
import { getPerson } from "@/services/Persons/queries/getPerson";
import Post from "@/components/[Post]/Post";
import Main from "@/components/[Main]/Main";

interface PageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60; // ISR seconds

export async function generateStaticParams() {
  return generateStaticParamsForType("person", ["slug"]);
}
/*
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPerson(slug);

  return setMetadata(person);
}
*/
export default async function PersonPage({ params }: PageProps) {
  const { slug } = await params;

  const person = await getPerson(slug);

  if (!person) {
    return <p className="text-center text-gray-500">Person not found</p>;
  }

  return (
    <Main>
      <Post data={person} />
    </Main>
  );
}

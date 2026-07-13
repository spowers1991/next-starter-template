import { generateStaticParamsForType } from "@/lib/sanity/ssg/generateStaticParams";
import { getPost } from "@/services/[Posts]/{Post}/queries/getPost";
import Post from "@/components/services/[Posts]/{Post}/Post";
import Main from "@/components/html/{Main}/Main";

import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/actions/create/createMetadata";

interface PageProps { params: Promise<{ slug: string }>; }

export const revalidate = 60; // ISR seconds

export async function generateStaticParams() {
  return generateStaticParamsForType("post", ["slug"]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  return createMetadata(post as Metadata);
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return <p className="text-center text-gray-500">Post not found</p>;
  }

  return (
    <Main>
      <Post post={post} />
    </Main>
  );
}

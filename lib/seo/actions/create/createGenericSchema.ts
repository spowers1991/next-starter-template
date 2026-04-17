import type { JsonLd } from "@/lib/seo/types/JsonLd";

interface GenericStructuredDataInput {
  type: string;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export function createGenericSchema({
  type,
  title,
  description,
  url,
  imageUrl,
}: GenericStructuredDataInput): JsonLd {
  const jsonLd: JsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    url,
  };

  if (imageUrl) {
    jsonLd.image = imageUrl;
  }
  console.log(jsonLd, "Created JSON-LD schema");
  return jsonLd;
}

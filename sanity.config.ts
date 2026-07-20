import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaType";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID

const dataset =
  process.env.SANITY_STUDIO_DATASET

if (!projectId || !dataset) {
  throw new Error(
    "Missing Sanity env vars. Set SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET (or NEXT_PUBLIC_/VITE_ equivalents)."
  );
}

export default defineConfig({
  name: "Sanity",
  title: "Sanity",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

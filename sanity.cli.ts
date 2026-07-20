import { defineCliConfig } from "sanity/cli";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID

const dataset =
  process.env.SANITY_STUDIO_DATASET

if (!projectId || !dataset) {
  throw new Error(
    "Missing Sanity env vars. Set SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET (or NEXT_PUBLIC_/VITE_ equivalents)."
  );
}

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});

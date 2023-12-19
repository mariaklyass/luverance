import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "lmlcsr2m",
  dataset: "production",
  apiVersion: "2023-12-19",
  useCdn: false,
});

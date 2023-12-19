import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "lmlcsr2m",
  dataset: "production",
});

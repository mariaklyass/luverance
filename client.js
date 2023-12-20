import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "lmlcsr2m",
  dataset: "production",
  apiVersion: "2023-12-19",
  useCdn: false,
});

export const fetchSanityData = async (query) => {
  try {
    //maybe needs destructuring {data} ???

    const data = await client.fetch(query);
    return data;
  } catch (err) {
    console.error(err);
  }
};

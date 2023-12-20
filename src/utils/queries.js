export const tourItemCollectionQuery = `
*[_type == "post"]
{
  title,
  'slug': slug.current
}
`;

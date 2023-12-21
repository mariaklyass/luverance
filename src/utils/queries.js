export const tourItemCollectionQuery = `
*[_type == "tour"]
{
  concertDate,
  city,
  location,
  ticketLink,
  soldOut,
  eventReport
}
`;

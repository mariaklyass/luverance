export const request = async (query) => {
  try {
    const result = await fetch(query);
  } catch (err) {
    console.log(err);
  }
};

export const sortByDate = (arr) => {
  return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
};
// useEffect(() => {
//   client
//     .fetch(
//       `*[_type == "post"]
//       {
//         title,
//         'slug': slug.current
// }
// `
//     )
//     .then((data) => {
//       setPostData(data);
//     })
//     .catch(console.error);
// }, []);

export const request = async (query) => {
  try {
    const result = await fetch(query);
  } catch (err) {
    console.log(err);
  }
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

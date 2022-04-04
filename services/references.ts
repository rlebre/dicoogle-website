export const getReferences = () => {
  return fetch(`${process.env.CMS_URL}/api/references?populate=Authors&populate=Category`)
    .then((res) => res.json())
    .then((res) => res.data);
};

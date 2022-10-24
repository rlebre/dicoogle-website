export const getDocumentation = () => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/documentations?populate=*`)
    .then((res) => res.json())
    .then((res) => res.data);
};

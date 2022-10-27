export const getDocumentation = () => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/cards?filters[type][$eq]=documentation&populate=*`)
    .then((res) => res.json())
    .then((res) => res.data);
};

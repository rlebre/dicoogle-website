export const getCarouselImages = () => {
  return fetch(`${process.env.CMS_URL}/api/carousel-images?populate=Image`).then((res) => res.json());
};

import { CardRoot } from '../interfaces/Card';

export const getCarouselImages = () => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/carousel-images?populate=*`)
    .then((res) => res.json())
    .then((res) => res.data[0].attributes.image.data);
};

export const getAbout = () => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/home-abouts/1`).then((res) => res.json());
};

export const getApplications = (): Promise<CardRoot> => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/cards?filters[type][$eq]=application&populate=*`).then((res) =>
    res.json()
  );
};

export const getFeatures = () => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/cards?filters[type][$eq]=feature&populate=*`).then((res) =>
    res.json()
  );
};

export const getResources = () => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/home-resources`).then((res) => res.json());
};

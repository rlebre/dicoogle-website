import { AboutAttributes } from '../interfaces/About';
import { CmsResponse } from '../interfaces/APICommon';
import { CardAttributes } from '../interfaces/Card';
import { ImageDatum } from '../interfaces/CarouselImage';
import { ResourceAttributes } from '../interfaces/Resource';

export const getCarouselImages = (): Promise<ImageDatum[]> => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/carousel-images?populate=*`)
    .then((res) => res.json())
    .then((res) => res.data[0].attributes.image.data);
};

export const getAbout = (): Promise<CmsResponse<AboutAttributes>> => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/home-about`).then((res) => res.json());
};

export const getApplications = (): Promise<CmsResponse<CardAttributes>> => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/cards?filters[type][$eq]=application&populate=*`).then((res) =>
    res.json()
  );
};

export const getFeatures = (): Promise<CmsResponse<CardAttributes>> => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/cards?filters[type][$eq]=feature&populate=*`).then((res) =>
    res.json()
  );
};

export const getResources = (): Promise<CmsResponse<ResourceAttributes>> => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/home-resources`).then((res) => res.json());
};

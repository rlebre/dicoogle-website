export interface CardAttributes {
  imageWidth: number;
  imageHeight: number;
  title: string;
  description: string[];
  href: null;
  type: string;
  createdAt: string;
  updatedAt: string;
  image: Image;
}

export interface Image {
  data: Data;
}

interface Data {
  id: number;
  attributes: DataAttributes;
}

interface DataAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  thumbnail: Small;
  small: Small;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface ReferenceAttributes {
  Title: string;
  Publisher: string;
  Year: number;
  Link: null | string;
  createdAt: string;
  updatedAt: string;
  Bibtex: null | string;
  Endnote: null | string;
  Category: Category;
  Authors: Authors;
}

export interface Authors {
  data: Author[];
}

export interface Author {
  id: number;
  attributes: AuthorAttributes;
}

export interface AuthorAttributes {
  Name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  data: Author;
}

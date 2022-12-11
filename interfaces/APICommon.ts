export interface CmsResponse<T> {
  data: Data<T>[];
  meta: Meta;
}

export interface CmsResponseSingle<T> {
  data: Data<T>;
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Data<T> {
  id: number;
  attributes: T;
}

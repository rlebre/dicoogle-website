import { CmsResponse } from '../interfaces/APICommon';
import { ReferenceAttributes } from '../interfaces/Reference';

export const getReferences = (): Promise<CmsResponse<ReferenceAttributes>> => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/references?populate=Authors&populate=Category`).then((res) =>
    res.json()
  );
};

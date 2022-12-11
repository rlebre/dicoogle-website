import { CmsResponse } from '../interfaces/APICommon';
import { CardAttributes } from '../interfaces/Card';

export const getDocumentation = (): Promise<CmsResponse<CardAttributes>> => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/cards?filters[type][$eq]=documentation&populate=*`).then((res) =>
    res.json()
  );
};

export const getCookieNotice = () => {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/cookie-notice`).then((res) => res.json());
};

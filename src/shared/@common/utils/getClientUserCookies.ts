import { getCookie } from 'cookies-next';

export const getClientCookies = () => {
  const accessToken = getCookie('accessToken') ?? '';
  const loginedId = Number(getCookie('userId'));

  return { accessToken, loginedId };
};

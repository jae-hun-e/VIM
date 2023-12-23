import axios from 'axios';

import { ServerError } from '@services/common/customError';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

const ERROR_CODE = [400, 401, 403, 404];

// 요청 Error handling
client.interceptors.request.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 Error handling
// client.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const data = error.response.data;
//
//     if (ERROR_CODE.includes(data.code)) {
//       // throw ClientError(data.message)
//       throw error;
//     }
//     throw new ServerError(data.message);
//   }
// );

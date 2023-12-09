import { AxiosResponse } from 'axios';

export class ClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ClientError';
  }
}

export class ServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServerError';
  }
}

export async function errorBoundary<T>(req: Promise<AxiosResponse>): Promise<T> {
  try {
    const res = await req;
    return res.data;
  } catch (e: unknown) {
    if (e instanceof ClientError) throw new ClientError('잘못된 요청입니다.');
    throw new ServerError('서버에 에러가 발생했습니다 :( 관리자에 문의하세요.');
  }
}

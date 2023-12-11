import { client } from '@services/common/createAxios';
import { errorBoundary } from '@services/common/customError';
import { ResponseDefaultSetup, ResponseRemainIP, ResponseType } from '@/app/_types/ResponseType';

export async function getAdminInfo() {
  const res = await client.get<ResponseType<ResponseDefaultSetup[]>>(`/admin/config`);

  return res.data;
}

export async function getResponse() {
  return errorBoundary<ResponseType<ResponseRemainIP[]>>(client.get(`/address/remained`));
}

interface AddressProps {
  type: 'floor' | 'dept';
}
export async function getAddress({ type }: AddressProps) {
  const response = await client.get(`/address`, {
    params: { type }
  });
  return response.data;
}

interface SearchProps {
  keyword: string;
  value: string;
}
export async function getSearchList({ keyword, value }: SearchProps) {
  const response = await client.get('/api/address/search', {
    params: {
      keyword,
      value
    }
  });
  return response.data;
}

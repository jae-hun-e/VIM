import { client } from '@services/common/createAxios';
import { errorBoundary } from '@services/common/customError';
import {
  ResponseDefaultSetup,
  ResponsePeople,
  ResponseRemainIP,
  ResponseType
} from '@/app/_types/ResponseType';
import { SearchProps } from '@/app/_types/reqestType';

export async function getAdminInfo() {
  const res = await client.get<ResponseType<ResponseDefaultSetup[]>>(`/admin/config`);

  return res.data;
}

export async function getResponse() {
  const res = await client.get<ResponseType<ResponseRemainIP[]>>(`/address/remained`);
  return res.data;
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

export async function getSearchList({ keyword, value }: SearchProps) {
  const response = await client.get<ResponsePeople[]>('/api/address/search', {
    params: {
      keyword,
      value
    }
  });
  // console.log('res', response);

  return response.data;
}

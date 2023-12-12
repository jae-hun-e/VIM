import { client } from '@services/common/createAxios';
import {
  ResponseAdminConfig,
  ResponsePeople,
  ResponseRemainIP,
  ResponseType
} from '@/app/_types/ResponseType';
import { SearchProps } from '@/app/_types/reqestType';

export async function getAdminInfo() {
  const res = await client.get<ResponseType<ResponseAdminConfig[]>>(`/admin/config`);
  console.log('res-getAdminInfo', res);
  return res.data;
}

export async function getRemainIP() {
  const res = await client.get<ResponseType<ResponseRemainIP[]>>(`/address/remained`);
  console.log('res-remain', res);
  return res.data;
}

interface AddressProps {
  // type: 'floor' | 'dept';
  type: string;
}
export async function getAddress({ type }: AddressProps) {
  const response = await client.get(`/address`, {
    params: { type }
  });

  return response.data;
}

export async function getSearchList({ keyword, value }: SearchProps) {
  const response = await client.get<ResponsePeople[]>('/address/search', {
    params: {
      keyword,
      value
    }
  });
  console.log('res-search', response);

  return response.data;
}

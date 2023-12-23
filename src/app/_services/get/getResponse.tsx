import { SearchProps } from '@customTypes/reqestType';
import {
  ResponseAdminConfig,
  ResponsePeople,
  ResponseRemainIP,
  ResponseType,
  StatusList
} from '@customTypes/ResponseType';
import { client } from '@services/common/createAxios';

export async function getAdminInfo() {
  const res =
    await client.get<ResponseType<ResponseAdminConfig[]>>(`/admin/config`);
  console.log('res-getAdminInfo', res);
  return res.data;
}

export async function getRemainIP() {
  const res =
    await client.get<ResponseType<ResponseRemainIP[]>>(`/address/remained`);
  console.log('res-remain', res);
  return res.data;
}

interface AddressProps {
  // type: 'floor' | 'dept';
  type: string;
}
export async function getAddress({ type }: AddressProps) {
  const res = await client.get<ResponseType<StatusList>>(`/address`, {
    params: { type }
  });
  console.log('res-getAddress', res);
  return res.data;
}

export async function getSearchList({ keyword, value }: SearchProps) {
  const res = await client.get<ResponseType<ResponsePeople[]>>(
    '/address/search',
    {
      params: {
        keyword,
        value
      }
    }
  );
  console.log('res-search', res);

  return res.data;
}

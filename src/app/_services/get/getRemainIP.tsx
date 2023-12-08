import { client } from '@services/common/createAxios';
import { errorBoundary } from '@services/common/customError';
import { RemainIP } from '@/app/_types/ResponseType';

export async function getAdminInfo() {
  return errorBoundary(client.get(`/admin/server-config`));
}

export async function getRemainIP() {
  return errorBoundary<RemainIP[]>(client.get(`/address/remained`));
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

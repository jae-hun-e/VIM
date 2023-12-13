import { client } from '@services/common/createAxios';

export async function deletePeopleInfo(ipAddress: string) {
  const res = await client.delete(`/address/${ipAddress}`);
  console.log('res-deletePeopleInfo', res);
  return res.data;
}

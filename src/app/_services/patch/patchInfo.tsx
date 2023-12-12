import { InsertUploadProps } from '@/app/_types/reqestType';
import { client } from '@services/common/createAxios';

export async function patchPeopleInfo(data: InsertUploadProps) {
  const res = await client.put(`/address/${data.ipAddress}`, data);
  return res.data;
}

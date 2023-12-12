import { AdminConfig, InsertUploadProps } from '@/app/_types/reqestType';
import { client } from '@services/common/createAxios';
import { ResponseAdminConfig, ResponseType } from '@/app/_types/ResponseType';

export async function patchAdminConfig(data: AdminConfig) {
  const res = await client.patch<ResponseType<ResponseAdminConfig>>(`/admin/config`, data);
  console.log('res-postAdminConfig', res);
  return res.data;
}

export async function patchPeopleInfo(data: InsertUploadProps) {
  const res = await client.patch(`/address/${data.ipAddress}`, data);
  return res.data;
}

import { AdminConfig, InsertUploadProps } from '@customTypes/reqestType';
import {
  ResponseAdminConfig,
  ResponsePeople,
  ResponseType
} from '@customTypes/ResponseType';
import { client } from '@services/common/createAxios';

export async function patchAdminConfig(data: AdminConfig) {
  const res = await client.patch<ResponseType<ResponseAdminConfig>>(
    `/admin/config`,
    data
  );
  console.log('res-patchAdminConfig', res);
  return res.data;
}

export async function patchPeopleInfo(data: InsertUploadProps) {
  const res = await client.patch<ResponseType<ResponsePeople>>(
    `/address/${data.ipAddress}`,
    data
  );
  console.log('res-patchPeopleInfo', res);
  return res.data;
}

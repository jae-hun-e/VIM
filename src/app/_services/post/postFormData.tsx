import { client } from '@services/common/createAxios';
import { ResponseLogin } from '@/app/_types/ResponseType';
import { LoginFormProps } from '@/app/_types/reqestType';

export async function postLogin(data: LoginFormProps) {
  const res = await client.post<ResponseLogin>(`/admin/sign-in`, data);
  return res.data;
}

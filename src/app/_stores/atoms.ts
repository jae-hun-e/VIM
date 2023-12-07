import { atom } from 'recoil';
import { ResponsePeople } from '@/app/_types/ResponseType';

export const isIpSetup = atom<boolean>({
  key: 'isIpSetup',
  default: false
});

export const SelectedPeople = atom<ResponsePeople | null>({
  key: 'SelectedPeople',
  default: null
});

export const currentPath = atom<string>({
  key: 'currentPath',
  default: ''
});

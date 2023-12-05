import { atom } from 'recoil';

export const isIpSetup = atom<boolean>({
  key: 'isIpSetup',
  default: false
});

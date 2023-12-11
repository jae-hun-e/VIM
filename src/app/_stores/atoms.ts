import { atom } from 'recoil';
import { ResponsePeople } from '@/app/_types/ResponseType';

export const isDefaultSetup = atom<boolean>({
  key: 'isDefaultSetup',
  // todo : test용으로
  default: true
});

interface SelectedProps {
  idx: number;
  info: ResponsePeople | null;
}

export const searchList = atom<SelectedProps[] | null>({
  key: 'searchList',
  default: null
});

export const selectedPeople = atom<SelectedProps>({
  key: 'selectedPeople',
  default: {
    idx: 0,
    info: null
  }
});

export const currentPath = atom<string>({
  key: 'currentPath',
  default: ''
});

import { atom } from 'recoil';

export type MemoTypes = {
  id: number;
  top: number;
  left: number;
  label: string;
  content: string;
  color: string;
};

const memoListState = atom<MemoTypes[]>({
  key: 'memoListState',
  default: [],
});

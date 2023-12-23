import { FieldValues, Path, UseFormWatch } from 'react-hook-form';

interface onSaveBtnProps<T extends FieldValues, K extends FieldValues> {
  watch: UseFormWatch<T>;
  inputList: Array<K>;
  totalFloor?: number;
}
export const onSaveBtn = <T extends FieldValues, K extends FieldValues>({
  watch,
  inputList,
  totalFloor
}: onSaveBtnProps<T, K>): boolean => {
  for (const list of inputList) {
    if (!('type' in list)) continue;
    if (!watch(list.type)) return false;
  }

  if (totalFloor) {
    for (let i = 1; i <= totalFloor; i++) {
      if (
        !(
          watch(`admin_floor_end_ip_address_${i}F` as Path<T>) &&
          watch(`admin_floor_start_ip_address_${i}F` as Path<T>)
        )
      )
        return false;
    }
  }
  return true;
};

import BtnSearch from '@assets/icon/icon_search.svg';
import { BtnProps } from '@customTypes/commendTypes';
import { cls } from '@utils/utils';

const SearchBtn = ({ className = '', onClick, type = 'submit' }: BtnProps) => {
  return (
    <button
      className={cls('cursor-pointer inline-block pt-[5px]', className)}
      onClick={onClick}
      type={type}>
      <BtnSearch />
    </button>
  );
};

export default SearchBtn;

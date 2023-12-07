'use client';
import { useForm } from 'react-hook-form';
import SearchBtn from '@components/molecules/SearchBtn';

interface SearchPeople {
  people?: string;
}

const SearchBar = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleSearchPeople = ({ people }: SearchPeople) => {
    console.log('test', people);
    reset({ people: '' });
  };

  return (
    <form
      className="sticky top-0 w-full pt-[32px] mb-[20px] bg-white "
      onSubmit={handleSubmit(handleSearchPeople)}>
      <input
        type="text"
        placeholder="사원을 검색해 주세요."
        className="bg-gray-2 pl-[20px] pr-[42px] py-[12px] box-border w-full rounded-[67px] "
        {...register('people', { required: true })}
      />
      <SearchBtn className="absolute right-[13px] top-[32px] bottom-1" type={'submit'} />
    </form>
  );
};

export default SearchBar;

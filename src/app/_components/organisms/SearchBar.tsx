'use client';
import { useForm } from 'react-hook-form';
import SearchBtn from '@components/molecules/button/SearchBtn';
import DropBox from '@components/molecules/common/DropBox';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSearchList } from '@services/get/getResponse';
import { useSetRecoilState } from 'recoil';
import { searchList } from '@stores/atoms';

// todo custom hook 으로 분리 + 데이터 단순화
const SearchBar = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm();

  const [search, setSearch] = useState({
    keyword: '',
    value: ''
  });

  const { data: searchData } = useQuery({
    queryKey: [getSearchList, search],
    queryFn: () => getSearchList(search),
    enabled: !!search.keyword
  });
  const [selected, setSelected] = useState({ id: 0, name: '선택', type: '' });

  const saveSearchResponse = useSetRecoilState(searchList);

  const handleSubmitSearch = ({ people }: { people?: string }) => {
    if (!selected.type) {
      setError('people', { type: 'custom', message: '검색하려는 종류를 선택해주세요.' });
      return;
    }

    if (!people?.trim()) {
      setError('people', { type: 'custom', message: '검색어를 입력해주세요.' });
      return;
    }

    setSearch({
      keyword: selected.type,
      value: people
    });
    reset({ people: '' });
  };

  useEffect(() => {
    console.log('search data', searchData?.data);
    searchData?.data && saveSearchResponse(searchData.data);
  }, [searchData?.data]);

  return (
    <>
      <form
        className="sticky top-0 w-full pt-[32px] mb-[20px] bg-white flex gap-4"
        onSubmit={handleSubmit(handleSubmitSearch)}>
        <DropBox selected={selected} onChange={setSelected} />
        <input
          type="text"
          placeholder="사원을 검색해 주세요."
          className="bg-gray-2 pl-[20px] pr-[42px] py-[12px] box-border w-full rounded-[67px] "
          {...register('people', { required: true })}
        />
        <SearchBtn className="absolute right-[13px] top-[32px] bottom-1" type={'submit'} />
      </form>
      {errors?.people?.message}
    </>
  );
};

export default SearchBar;

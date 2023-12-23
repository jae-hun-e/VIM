import { useForm } from 'react-hook-form';

import { InfoArrProps } from '@customTypes/commendTypes';
import { InsertUploadProps } from '@customTypes/reqestType';
import { cls } from '@utils/utils';

interface PeopleInfoInputProps {
  infoArr: InfoArrProps[];
  isSetup: boolean;
}

/*todo 합성 컴포넌트로 form 만들기 (input, 저장/수정/할당해제 버튼)
 * 1. 관리 페이지
 * 2. 정보 기입
 * 3. 정보 수정
 * */

const PeopleInfoInput = ({ infoArr, isSetup }: PeopleInfoInputProps) => {
  const { register } = useForm<InsertUploadProps>();

  return (
    <form className="flex flex-col gap-[16px]">
      {infoArr.map(({ title, type, value }) => {
        return (
          <div key={title} className="flex gap-[20px]">
            <label htmlFor={title} className="text-[18px] w-[126px]">
              {title}
            </label>
            <input
              id={title}
              type={type === 'floor' ? 'number' : 'text'}
              className={cls(
                type === 'floor' ? 'w-[77px]' : 'w-[295px]',
                isSetup ? 'bg-white' : 'bg-gray-2',
                'h-[36px] bg-gray-2 rounded-[4px] px-[16px]'
              )}
              defaultValue={value}
              disabled={isSetup}
              {...register(type, { required: true })}
            />
          </div>
        );
      })}
    </form>
  );
};

export default PeopleInfoInput;

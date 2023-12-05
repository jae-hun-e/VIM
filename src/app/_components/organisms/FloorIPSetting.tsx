import { UseFormRegister } from 'react-hook-form';
import { DefaultSettingState } from '@/app/(routes)/dashboard/admin/page';

interface FloorIPSettingProps {
  page: number[];
  register: UseFormRegister<DefaultSettingState>;
}

const FloorIPSetting = ({ page, register }: FloorIPSettingProps) => {
  return (
    <div className="flex justify-center gap-[12px] mb-[32px]">
      {page.map((floor) => {
        return (
          <div key={floor} className="flex flex-col items-center gap-[13px] text-[14px]">
            <div className="flex gap-[8px]">
              <input
                type="number"
                className="w-[102px] h-[36px] bg-gray-2 rounded-[4px] px-[16px] appearance-none"
                {...register(`${floor}F.startIP`, { required: true })}
                placeholder="시작IP 입력"
              />
              <input
                type="number"
                className="w-[102px] h-[36px] bg-gray-2 rounded-[4px] px-[16px] appearance-none"
                {...register(`${floor}F.endIP`, { required: true })}
                placeholder="종료IP 입력"
              />
            </div>
            {/*todo 서브넷 없앨 듯*/}
            <input
              type="number"
              className="w-[212px] h-[36px] bg-gray-2 rounded-[4px] px-[16px] appearance-none"
              {...register(`${floor}F.subnet`, { required: true })}
            />
            <p className="font-medium text-[20px] text-gray-4">{floor}F</p>
          </div>
        );
      })}
    </div>
  );
};

export default FloorIPSetting;

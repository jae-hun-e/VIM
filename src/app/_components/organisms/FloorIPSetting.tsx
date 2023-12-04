import { UseFormRegister } from 'react-hook-form';
import { DefaultSettingState } from '@/app/(routes)/dashboard/admin/page';

interface FloorIPSettingProps {
  floorNum: number;
  register: UseFormRegister<DefaultSettingState>;
}

const FloorIPSetting = ({ floorNum, register }: FloorIPSettingProps) => {
  return (
    <article className="flex justify-center gap-[12px]">
      {Array.from({ length: floorNum }, (_, i) => {
        return (
          <div key={i} className="flex flex-col items-center gap-[13px]">
            <div className="flex gap-[8px]">
              <input
                type="number"
                className="w-[102px] h-[36px] bg-gray-2 rounded-[4px] px-[16px] appearance-none"
                {...register(`${i + 1}.startIP`, { required: true })}
              />
              <input
                type="number"
                className="w-[102px] h-[36px] bg-gray-2 rounded-[4px] px-[16px] appearance-none"
                {...register(`${i + 1}.endIP`, { required: true })}
              />
            </div>
            <input
              type="number"
              className="w-[212px] h-[36px] bg-gray-2 rounded-[4px] px-[16px] appearance-none"
              {...register(`${i + 1}.subnet`, { required: true })}
            />
            <p className="font-medium text-[20px] text-gray-4">{i + 1}F</p>
          </div>
        );
      })}
    </article>
  );
};

export default FloorIPSetting;

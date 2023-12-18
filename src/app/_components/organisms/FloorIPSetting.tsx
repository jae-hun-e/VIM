import { UseFormRegister } from 'react-hook-form';
import { cls } from '@utils/utils';
import { DefaultSettingState } from '@/app/_types/commendTypes';

interface FloorIPSettingProps {
  page: number[];
  register: UseFormRegister<DefaultSettingState>;
  isSetup: boolean;
}

const FloorIPSetting = ({ page, register, isSetup }: FloorIPSettingProps) => {
  return (
    <div className="flex justify-center gap-[12px] mb-[32px]">
      {page.map((floor) => {
        return (
          <div key={floor} className="flex flex-col items-center gap-[13px] text-[14px]">
            <div className="flex gap-[8px]">
              <input
                type="text"
                className={cls(
                  isSetup ? 'bg-white' : 'bg-gray-2',
                  'w-[102px] h-[36px] rounded-[4px] px-[16px]'
                )}
                disabled={isSetup}
                {...register(`admin_floor_start_ip_address_${floor}F`, { required: true })}
                placeholder="시작IP 입력"
              />
              <input
                type="text"
                className={cls(
                  isSetup ? 'bg-white' : 'bg-gray-2',
                  'w-[102px] h-[36px] rounded-[4px] px-[16px]'
                )}
                disabled={isSetup}
                {...register(`admin_floor_end_ip_address_${floor}F`, { required: true })}
                placeholder="종료IP 입력"
              />
            </div>

            <p className="font-medium text-[20px] text-gray-4">{floor}F</p>
          </div>
        );
      })}
    </div>
  );
};

export default FloorIPSetting;

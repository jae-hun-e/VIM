import Monitor from '@assets/icon/icon_monitor.svg';
import Hospital from '@assets/icon/icon_monitor_hospital.svg';
import { StatusList } from '@customTypes/ResponseType';

const IPByDepartment = ({ list }: { list: StatusList }) => {
  return (
    <div className="flex flex-wrap gap-[16px]">
      {list.map(({ key, addressList }) => {
        return (
          <div key={key} className="mb-[20px] flex flex-col max-w-[440px]">
            <p className="text-[20px] mb-[16px]">{key}</p>
            <div className="flex flex-wrap border-2 border-gray-3 rounded-[8px] p-[32px] gap-[14px] bg-sub-3">
              {addressList.map(({ ipAddress, isComputer }) => {
                return (
                  <div
                    key={ipAddress}
                    className="flex flex-col gap-[8px] justify-between">
                    <div className="flex justify-center">
                      {isComputer ? (
                        <div className="pt-[5px] pb-[3px] px-[3px]">
                          <Monitor />
                        </div>
                      ) : (
                        <Hospital />
                      )}
                    </div>
                    <p className="text-[12px]">{ipAddress}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IPByDepartment;

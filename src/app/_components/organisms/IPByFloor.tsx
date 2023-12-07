import { floorIP } from '@constants/dummyData';
import Monitor from '@assets/icon/icon_monitor.svg';
import Hospital from '@assets/icon/icon_monitor_hospital.svg';

const IPByFloor = () => {
  return (
    <div>
      {[...floorIP].reverse().map(({ key, addressList }) => {
        return (
          <div key={key} className="mb-[20px]">
            <p className="text-[20px] mb-[16px]">{key}층</p>
            <div className="flex flex-wrap items-center border-2 border-gray-3 rounded-[8px] p-[32px] gap-[14px] w-5/6 bg-sub-3">
              {addressList.map(({ ipAddress, isComputer }) => {
                return (
                  <div key={ipAddress} className="flex flex-col gap-[8px] justify-between">
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

export default IPByFloor;

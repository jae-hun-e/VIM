import Box from '@components/atoms/Box';
import BackBtn from '@components/molecules/BackBtn';
import { routerHref } from '@constants/navList';
import { remainIP } from '@constants/dummyData';

const RemainIP = () => {
  return (
    <Box className="w-full h-full">
      <header className="flex gap-[24px] items-center mb-[40px]">
        <BackBtn onBackHref={routerHref.allocationIP} />
        <p className="text-[24px]">잔여 IP</p>
      </header>
      <div>
        {[...remainIP].reverse().map(({ floor, ipArr }) => {
          return (
            <div key={floor} className="mb-[20px]">
              <p className="text-[20px] mb-[16px]">{floor}층</p>
              <div className="border-2 border-gray-3 rounded-[8px] py-[20px] px-[32px] flex gap-[32px]">
                {ipArr.map((ip) => {
                  return <p key={ip}>{ip}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default RemainIP;

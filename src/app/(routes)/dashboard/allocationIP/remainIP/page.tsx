'use client';
import { useQuery } from '@tanstack/react-query';
import { getRemainIP } from '@services/get/getResponse';

const RemainIP = () => {
  const {
    isError,
    data: response,
    error
  } = useQuery({
    queryKey: [getRemainIP],
    queryFn: getRemainIP
  });

  if (isError) throw error;

  if (!response?.data) {
    return <div />;
  }

  console.log(response);
  return (
    <div>
      {response.data.map(({ floor, ipArr }) => {
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
  );
};

export default RemainIP;

'use client';
import { useQuery } from '@tanstack/react-query';
import { getRemainIP } from '@services/get/getResponse';
import { mapping } from '@utils/util';
import { ResponseRemainIP } from '@/app/_types/ResponseType';

const RemainIP = () => {
  const { data: response, isLoading } = useQuery({
    queryKey: [getRemainIP],
    queryFn: getRemainIP
  });

  if (isLoading) return <div>로딩중...</div>;

  const floorList = mapping<ResponseRemainIP>({
    keyword: 'floor',
    value: 'ipAddress',
    data: response?.data
  });
  console.log(floorList);

  return (
    <div>
      {floorList ? (
        Object.keys(floorList).map((floor) => {
          return (
            <div key={floor} className="mb-[20px]">
              <p className="text-[20px] mb-[16px]">{floor}층</p>
              <div className="border-2 border-gray-3 rounded-[8px] py-[20px] px-[32px] flex flex-wrap gap-[32px] line-clamp-1">
                {floorList[floor].map((ip) => {
                  return <p key={ip}>{ip}</p>;
                })}
              </div>
            </div>
          );
        })
      ) : (
        <div>데이터가 없습니다. </div>
      )}
    </div>
  );
};

export default RemainIP;

import Model from '@components/atoms/Model';
import { ResponsePeople } from '@/app/_types/ResponseType';
import EditBtn from '@components/molecules/EditBtn';
import DeleteBtn from '@components/molecules/DeleteBtn';

interface InfoModelProps {
  handleClose: () => void;
  info: null | ResponsePeople;
}
const InfoModel = ({ handleClose, info }: InfoModelProps) => {
  if (!info) {
    return;
  }

  const { ipAddress, floor, name, macAddress, department } = info;
  return (
    <Model className="w-[360px] h-[400px]">
      <div className="flex-grow flex flex-col justify-start items-start gap-[24px] text-[20px]">
        <p>부서 : {department}</p>
        <p>층 : {floor}</p>
        <p>사원 이름 : {name}</p>
        <p>MAX address : {macAddress}</p>
        <p>IP address : {ipAddress}</p>
      </div>
      <div className="flex justify-center gap-[24px]">
        <EditBtn onClick={handleClose} />
        <DeleteBtn />
      </div>
    </Model>
  );
};

export default InfoModel;

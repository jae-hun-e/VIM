import Model from '@components/molecules/Model';
import OkBtn from '@components/molecules/OkBtn';

interface FailModelProps {
  openModel: boolean;
  closeModel: () => void;
}
const FailModel = ({ openModel, closeModel }: FailModelProps) => {
  return (
    <Model
      isOpen={openModel}
      className="w-[480px] h-[230px] flex justify-center items-center gap-[32px] border-[4px] border-gray-3 shadow-xl text-[20px]">
      <div className="text-center">
        <p>기본 설정이 완료되지 않아</p>
        <p>다른 페이지로 이동이 불가합니다.</p>
      </div>
      <OkBtn onClick={closeModel} />
    </Model>
  );
};

export default FailModel;

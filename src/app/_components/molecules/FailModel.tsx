import Model from '@components/atoms/Model';
import OkBtn from '@components/molecules/OkBtn';

interface FailModelProps {
  handleClose: () => void;
}
const FailModel = ({ handleClose }: FailModelProps) => {
  return (
    <Model className="w-[400px] h-[200px]">
      <h1 className="text-2xl font-bold">test</h1>
      <OkBtn onClick={handleClose} />
    </Model>
  );
};

export default FailModel;

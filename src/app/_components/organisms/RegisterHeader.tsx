import { cls } from '@utils/util';

interface IRegisterHeader {
  onClickTag: (arg: string) => void;
  onSelectTag: string;
}
const RegisterHeader = ({ onClickTag, onSelectTag }: IRegisterHeader) => {
  return (
    <div className="flex justify-between w-full px-10 pt-2 fixed">
      <button onClick={() => onClickTag('')} className="w-[44px] h-[29px]">
        <p className="text-[#1b5391] [font-family:'Inter-Bold',Helvetica] font-bold text-[24px]">
          AIM
        </p>
      </button>
      <div>
        <button
          onClick={() => onClickTag('intro')}
          className={cls(
            onSelectTag === 'intro' ? 'text-main' : 'text-default',
            "[font-family:'Noto_Sans_KR-Regular',Helvetica] pr-2 border-r-2 border-sub-2"
          )}>
          AIM 소개
        </button>
        <button
          onClick={() => onClickTag('login')}
          className={cls(
            onSelectTag === 'login' ? 'text-main' : 'text-default',
            'text-left text-[#444] pl-2'
          )}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default RegisterHeader;

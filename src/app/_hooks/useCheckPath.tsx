import { Dispatch, SetStateAction, useEffect } from 'react';

import { usePathname } from 'next/navigation';
import { useRecoilState } from 'recoil';

import { currentPath } from '@stores/atoms';

type useCheckPathProps = [
  path: string,
  setTab: Dispatch<SetStateAction<string>>
];

const useCheckPath = (): useCheckPathProps => {
  // const [path, setPath] = useState<string>(''); // 버버벅
  const [path, setPath] = useRecoilState(currentPath);
  const pathName = usePathname();

  useEffect(() => {
    const path = pathName.split('/').pop();
    path && setPath(() => path);
  });

  return [path, setPath];
};

export default useCheckPath;

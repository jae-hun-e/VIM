import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// interface useCheckPathProps {
//   path: string;
//   setTab: Dispatch<SetStateAction<string>>;
// }
type useCheckPathProps = [path: string, setTab: Dispatch<SetStateAction<string>>];

const useCheckPath = (): useCheckPathProps => {
  const [path, setPath] = useState<string>('');
  const pathName = usePathname();

  useEffect(() => {
    const path = pathName.split('/').pop();
    path && setPath(() => path);
  }, []);

  return [path, setPath];
};

export default useCheckPath;

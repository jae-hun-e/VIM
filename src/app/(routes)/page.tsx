'use client';

import RegisterHeader from '@components/organisms/RegisterHeader';
import { useState } from 'react';
import Login from '@components/organisms/Login';
import Logo from '@assets/logo/icon_logo.svg';
import DescribeImg from '@assets/icon/Icon_describeImg.svg';
import { cls } from '@utils/util';

const Register = () => {
  const [tab, setTab] = useState<string>('');
  return (
    <article className={cls(tab === 'login' ? 'bg-gray-1' : '', 'w-full h-[100vh]')}>
      <RegisterHeader onClickTag={setTab} onSelectTag={tab} />
      <div className="flex justify-center items-center w-full h-full text-default">
        {tab !== 'login' ? (
          <div className="flex flex-col justify-center items-center gap-[21px]">
            <Logo />
            <p>Auto Internet Protocol address Manager</p>
            {tab === 'intro' && (
              <div className="flex flex-col items-center gap-[40px] mt-[48px]">
                <div className="gap-[8px]">
                  <p>
                    그동안 수작업으로 <span className="text-main">IP Address를 관리하는 것</span>에
                    대한 불편함과 실수를 떨쳐보세요
                  </p>
                  <p>
                    이제, 보안성이 뛰어나고 편리한 <span className="text-main">AIM</span>을 통해 IP
                    Address를 손 쉽게 매니징해보세요
                  </p>
                </div>
                <DescribeImg />
              </div>
            )}
          </div>
        ) : (
          <Login />
        )}
      </div>
    </article>
  );
};
export default Register;

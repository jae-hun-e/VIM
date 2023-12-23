'use client';
import { ClientError, ServerError } from '@services/common/customError';

interface ErrorUIProps {
  error: ClientError | ServerError;
  reset: () => void;
}

const RemainIPError = ({ error, reset }: ErrorUIProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-4/5">
      <p className="text-4xl font-bold mb-4">데이터를 불러올 수 없습니다 :(</p>
      <p className="text-gray-600 text-lg mb-8">{error.message}</p>
      <button
        className="px-4 py-2 bg-main text-white rounded hover:bg-blue-600"
        onClick={reset}>
        Retry
      </button>
    </div>
  );
};
export default RemainIPError;

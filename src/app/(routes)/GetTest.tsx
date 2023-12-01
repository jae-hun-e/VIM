'use client';
import { useQuery } from '@tanstack/react-query';
import { getData } from '@services/getData';

const GetTest = ({ queryKey }: { queryKey: string }) => {
  const { data } = useQuery({ queryKey: [queryKey], queryFn: getData });
  const { data: otherData } = useQuery({ queryKey: ['posts-2'], queryFn: getData });
  return (
    <div className="flex">
      <div>
        <h2 className="text-lg text-center font-bold mb-6">React Query SSR 적용</h2>
        <ul>{data?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
      </div>
      <div>
        <h2 className="text-lg text-center font-bold mb-6">React Query SSR 적용 안함</h2>
        <ul>{otherData?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
      </div>
    </div>
  );
};

export default GetTest;

import Hydrated from '@services/Hydrated';
import GetTest from '@/app/(routes)/GetTest';

export default function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl"> test page</h1>
      <Hydrated queryKey={'posts'}>
        <GetTest queryKey={'posts'} />
      </Hydrated>
    </main>
  );
}

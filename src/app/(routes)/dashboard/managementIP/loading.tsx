import SkeletonLoader from '@components/molecules/common/SkeletonLoader';

const ManagementIPLoading = () => {
  return (
    <SkeletonLoader className="w-full h-full p-2">
      <SkeletonLoader.Box
        repeat={4}
        className="flex flex-col gap-4 overflow-hidden">
        <SkeletonLoader.Box repeat={2} className="flex gap-4 overflow-hidden">
          <SkeletonLoader.Profile className="min-w-[60px] min-h-[60px]" />
          <div className="flex flex-col justify-center w-full gap-3">
            <SkeletonLoader.Box className="grid grid-cols-3 gap-4 w-full">
              <SkeletonLoader.Bar className="h-3 col-span-2" />
              <SkeletonLoader.Bar className="h-3 col-span-1" />
            </SkeletonLoader.Box>
            <SkeletonLoader.Bar className="h-3 w-full" />
          </div>
        </SkeletonLoader.Box>
      </SkeletonLoader.Box>
    </SkeletonLoader>
  );
};

export default ManagementIPLoading;

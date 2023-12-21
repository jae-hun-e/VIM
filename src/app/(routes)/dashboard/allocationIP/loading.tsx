import SkeletonLoader from '@components/molecules/common/SkeletonLoader';

const AllocationIPLoading = () => {
  return (
    <SkeletonLoader className="w-1/2 h-1/2 p-2">
      <SkeletonLoader.Box repeat={4} className="flex flex-col gap-4 overflow-hidden">
        <SkeletonLoader.Profile className="w-[40px] h-[40px]" />
        <div className="flex flex-col w-full gap-3">
          <SkeletonLoader.Box repeat={2} className="grid grid-cols-3 gap-4 w-full">
            <SkeletonLoader.Bar className="h-3 col-span-2" />
            <SkeletonLoader.Bar className="h-3 col-span-1" />
          </SkeletonLoader.Box>
          <SkeletonLoader.Bar className="h-3 w-full" />
        </div>
      </SkeletonLoader.Box>
    </SkeletonLoader>
  );
};

export default AllocationIPLoading;

import SkeletonLoader from '@components/molecules/common/SkeletonLoader';

const AllocationIPLoading = () => {
  return (
    <div className="flex justify-center items-center">
      <SkeletonLoader className="p-2 w-full h-full">
        <SkeletonLoader.Profile className="w-[150px] h-[60px] mb-[100px]" />
        <SkeletonLoader.Box repeat={6} className="flex flex-col gap-[80px] overflow-hidden">
          <SkeletonLoader.Box className="flex gap-4 ">
            <SkeletonLoader.Profile className="w-[40px] h-[40px]" />
            <SkeletonLoader.Box className="flex flex-col w-full gap-3">
              <SkeletonLoader.Box className="grid grid-cols-3 gap-4 w-full">
                <SkeletonLoader.Bar className="h-3 col-span-2" />
                <SkeletonLoader.Bar className="h-3 col-span-1" />
              </SkeletonLoader.Box>
              <SkeletonLoader.Bar className="h-3 w-full" />
            </SkeletonLoader.Box>
          </SkeletonLoader.Box>
        </SkeletonLoader.Box>
      </SkeletonLoader>
    </div>
  );
};

export default AllocationIPLoading;

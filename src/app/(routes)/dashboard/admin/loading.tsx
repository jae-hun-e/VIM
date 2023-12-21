import SkeletonLoader from '@components/molecules/common/SkeletonLoader';

const AdminLoading = () => {
  return (
    <SkeletonLoader className="w-full h-full">
      <SkeletonLoader.Box repeat={3}>
        <div className="flex items-center gap-2">
          <SkeletonLoader.Profile className="w-[40px] h-[40px]" />
          <div className="grid grid-cols-3 gap-4 w-full">
            <SkeletonLoader.Bar className="h-2 col-span-2" />
            <SkeletonLoader.Bar className="h-2 col-span-1" />
          </div>
        </div>
      </SkeletonLoader.Box>
    </SkeletonLoader>
  );
};

export default AdminLoading;

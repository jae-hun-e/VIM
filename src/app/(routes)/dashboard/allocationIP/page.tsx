import FileUpload from '@components/organisms/FileUpload';
import InsertUpload from '@components/organisms/InsertUpload';

const AllocationIP = () => {
  return (
    <section className="flex gap-[20px] ">
      <FileUpload />
      <InsertUpload />
    </section>
  );
};
export default AllocationIP;

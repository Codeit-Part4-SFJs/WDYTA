import { Modal } from '@/shared/ui/Modal';

const ExampleModal = () => {
  return (
    <Modal closeIcon={false}>
      <div className="mobile:w-[335px] md:w-[590px] lg:w-[620px] flex justify-center items-center">
        예시 2
      </div>
    </Modal>
  );
};

export default ExampleModal;

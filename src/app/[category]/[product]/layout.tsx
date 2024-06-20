import { MainSectionLayout } from '@/components/Detail/MainSectionLayout';

const DetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainSectionLayout>{children}</MainSectionLayout>;
};

export default DetailLayout;

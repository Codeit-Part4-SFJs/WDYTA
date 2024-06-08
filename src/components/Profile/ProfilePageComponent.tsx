import { ActivitySection } from '@/components/Profile/ActivitySection';
import { ProductSection } from './ProductSection';
import { ProfileCard } from './ProfileCard';

interface ProfilePageComponentProps {
  loginedId: string | null;
  accessToken: string;
  currentProfileId: string | null;
}

export const ProfilePageComponent = ({
  loginedId,
  accessToken,
  currentProfileId,
}: ProfilePageComponentProps) => {
  return (
    <main className="flex justify-center items-start md:flex-col mobile:flex-col md:items-center mobile:items-center md:min-w-[509px] mobile:min-w-[335px] lg:gap-[70px] gap-[60px] py-[52px] lg:px-[20px] md:px-[100px] mobile:px-[21px] ">
      <ProfileCard
        loginedId={Number(loginedId)}
        currentProfileId={Number(currentProfileId)}
        accessToken={accessToken}
      />
      <div className="flex flex-col grow lg:gap-[80px] gap-[60px] max-w-[940px] md:w-full mobile:w-full">
        <ActivitySection />
        <ProductSection currentProfileId={Number(currentProfileId)} />
      </div>
    </main>
  );
};

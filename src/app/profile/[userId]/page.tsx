import { ProfilePageComponent } from '@/components/Profile';

interface ProfileProps {
  params: {
    userId: string;
  };
}
export default function Profile({ params }: ProfileProps) {
  const { userId } = params;

  return <ProfilePageComponent userId={Number(userId)} />;
}

import { IconType } from '@/shared/ui/Icon/types/iconType';

// export type ActivityData = Omit<ActivityCardProps, 'accessToken'>;

export interface Activity {
  title: string;
  icon?: IconType;
}

export interface ActivityCardProps {
  title: string;
  icon?: IconType;
  loginedId: number | null;
  accessToken: string;
}

'use client';

import { useCompareItems } from '@/stores/useCompareItems';
import Link from 'next/link';

export const GnbCompareButton = () => {
  const firstItem = useCompareItems((state) => state.firstItem);
  const secondItem = useCompareItems((state) => state.secondItem);
  const linkHref = () => {
    if (!!firstItem && !!secondItem) {
      return `/compare?product1=${firstItem}&product2=${secondItem}`;
    } else if (!firstItem && !!secondItem) {
      return `/compare?product2=${secondItem}`;
    } else if (!!firstItem && !secondItem) {
      return `/compare?product1=${firstItem}`;
    } else return `/compare`;
  };

  return (
    <Link
      className="mobile:hidden md:text-[14px] lg:text-4 text-gray-F1 not-italic font-normal leading-normal"
      href={linkHref()}
    >
      비교하기
    </Link>
  );
};

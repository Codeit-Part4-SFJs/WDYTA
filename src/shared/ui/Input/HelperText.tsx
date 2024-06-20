import { PropsWithChildren } from 'react';

interface HelperTextProps {
  type: 'basic' | 'error';
}

const TEXT_TYPE = {
  basic: 'text-gray-6E',
  error: 'text-red',
};

const HelperText = ({ type, children }: PropsWithChildren<HelperTextProps>) => {
  return (
    <span className={`${TEXT_TYPE[type]} text-xs lg:text-sm`}>{children}</span>
  );
};

export default HelperText;

import { Icon } from '@/shared/ui/Icon';
import { InputHTMLAttributes } from 'react';

export interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  previewImage: string;
  handleDeleteButton?: () => void;
  handleImageChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageInput = ({
  previewImage,
  handleDeleteButton,
  handleImageChange,
}: ImageInputProps) => {
  return (
    <div>
      {previewImage ? (
        <div
          className="relative w-[140px] md:w-[135px] lg:w-[160px] h-[140px] md:h-[135px] lg:h-[160px] rounded-lg"
          style={{
            backgroundImage: `url(${previewImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute top-[5px] right-[5px] w-[26px] lg:w-7 h-[26px] lg:h-7 p-1 bg-black bg-opacity-50 rounded-lg">
            <Icon
              name="CloseIcon"
              className="w-full h-full text-gray-F1 cursor-pointer"
              onClick={handleDeleteButton}
            />
          </div>
        </div>
      ) : (
        <div className="relative w-[140px] md:w-[135px] lg:w-[160px] h-[140px] md:h-[135px] lg:h-[160px] rounded-lg p-[58px] md:p-[55px] lg:p-[63px] border border-solid border-gray-35 bg-black-25">
          <input
            className="absolute inset-0 w-full h-full opacity-0"
            type="file"
            onChange={handleImageChange}
          />
          <Icon
            name="PhotoIcon"
            className="w-full h-full text-gray-6E cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

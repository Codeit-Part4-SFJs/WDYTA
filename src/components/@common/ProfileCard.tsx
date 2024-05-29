import { Icon } from '@/shared/ui/Icon';
import { ImageComponent } from '@/shared/ui/Img';

const ProductCard = () => {
  return (
    <section className="pt-2 pl-2 pr-2 lg:pt-[10px] lg:pl-[10px] lg:pr-[10px] pb-[10px] lg:pb-[25px] max-w-[160px] max-h-[183px] md:max-w-[247px] md:max-h-[256px] lg:max-w-[300px] lg:max-h-[308px] rounded-lg bg-gray-35">
      <div className="flex flex-col items-center mobile:gap-[10px] md:gap-[15px] gap-[20px]">
        <ImageComponent
          type="product"
          src="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/158/1716804166536/KakaoTalk_20240527_185342395.jpg"
          alt="이미지"
        />
        <div className="w-full flex flex-col lg:gap-[10px] md:gap-[10px] lg:px-[20px] md:px-[6.5px] ">
          <div className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-F1 truncate">
            Sony WH-1000XM3xxxxxxxxxxxxx
          </div>
          <div className="flex justify-between mobile:flex-col mobile:text-[12px] md:text-[14px] lg:text-[16px] text-gray-6E">
            <div className="flex items-center gap-[15px]">
              <p>리뷰 129</p>
              <p>찜 34</p>
            </div>
            <div className="flex items-center gap-[2px]">
              <Icon
                name="StarIcon"
                className="mobile:w-[12px] mobile:h-[12px] md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px] fill-yellow"
              />
              <p className="text-gray-9F">4.7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;

'use client';

import { Sort } from '@/shared/ui/Dropdown/Sort';
import ProductCard from '../@common/ProductCard';

const data1 = {
  updatedAt: '2024-05-29T15:11:37.143Z',
  createdAt: '2024-05-29T15:11:37.143Z',
  writerId: 1,
  categoryId: 1,
  favoriteCount: 34,
  reviewCount: 129,
  rating: 4.7,
  image:
    'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/158/1716804166536/KakaoTalk_20240527_185342395.jpg',
  name: 'stringxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  id: 1,
};

const data2 = {
  updatedAt: '2024-05-29T15:11:37.143Z',
  createdAt: '2024-05-29T15:11:37.143Z',
  writerId: 1,
  categoryId: 1,
  favoriteCount: 34,
  reviewCount: 129,
  rating: 4.7,
  image:
    'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/158/1717172068396/macbookkkk.jpg',
  name: 'stringxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  id: 1,
};

const ProductSection = () => {
  return (
    <section className="flex flex-col gap-[30px]">
      <div className="!p-0 lg:hidden">
        <Sort
          options={[
            { value: '리뷰 남긴 상품', label: '리뷰 남긴 상품' },
            { value: '등록한 상품', label: '등록한 상품' },
            { value: '찜한 상품', label: '찜한 상품' },
          ]}
          onSelect={() => {
            console.log('a');
          }}
          defaultValue="리뷰 남긴 상품"
        />
      </div>
      <ul className="flex gap-[40px] text-gray-6E lg:text-[20px] text-[18px] mobile:hidden md:hidden">
        <li>
          <button type="button">리뷰 남긴 상품</button>
        </li>
        <button type="button">등록한 상품</button>
        <button type="button">찜한 상품</button>
      </ul>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 mobile:grid-cols-2  gap-[20px]">
        <ProductCard product={data1} />
        <ProductCard product={data2} />
        <ProductCard product={data1} />
        <ProductCard product={data2} />
        <ProductCard product={data1} />
        <ProductCard product={data2} />
        <ProductCard product={data1} />
        <ProductCard product={data2} />
      </div>
    </section>
  );
};

export default ProductSection;

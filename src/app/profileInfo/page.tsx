import ProductCard from '@/components/@common/ProductCard';
import ActivityCard from '@/components/Profile/ActivityCard';
import ProfileCard from '@/components/Profile/ProfileCard';
// import ProfileCard from '@/components/Profile/ProfileCard';

const data = {
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

export default function Profile() {
  return (
    <main className="flex justify-center lg:gap-[70px] py-[50px]">
      <ProfileCard />
      <div className="flex flex-col gap-[80px]">
        <section className="flex flex-col lg:gap-[30px]">
          <h1 className="text-[20px] text-gray-F1">활동 내역</h1>
          <div className="flex justify-between">
            <ActivityCard title="남긴 별점 평균" icon="StarIcon" />
            <ActivityCard title="남긴 리뷰" icon="ReviewIcon" />
            <ActivityCard title="남긴 별점 평균" />
          </div>
        </section>
        <section className="flex flex-col gap-[30px]">
          <ul className="flex gap-[40px] text-gray-6E text-[20px]">
            <li>
              <button type="button">리뷰 남긴 상품</button>
            </li>
            <button type="button">등록한 상품</button>
            <button type="button">찜한 상품</button>
          </ul>

          <div className="grid grid-cols-3 gap-[20px]">
            <ProductCard product={data} />
            <ProductCard product={data} />
            <ProductCard product={data} />
            <ProductCard product={data} />
            <ProductCard product={data} />
            <ProductCard product={data} />
            <ProductCard product={data} />
            <ProductCard product={data} />
          </div>
        </section>
      </div>
      {/* <ProfileCard /> */}
    </main>
  );
}

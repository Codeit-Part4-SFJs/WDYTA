// 모바일 크기일 때 SideMenu를 여는 버튼입니다. 디자인을 정한게 없어 임시로 만든 버튼입니다. 추후에 스타일링 필요!
"use client";

import useSideMenuStore from "@/stores/useSideMenuStore";

const SideMenuOpenButton = () => {
  const setIsOpenSideMenu = useSideMenuStore(
    (state) => state.setIsOpenSideMenu
  );

  return (
    <button type="button" onClick={setIsOpenSideMenu}>
      SideMenuOpenButton
    </button>
  );
};

export default SideMenuOpenButton;

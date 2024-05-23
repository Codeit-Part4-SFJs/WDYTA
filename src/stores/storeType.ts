// 먼저 전역 변수로 사용하고 싶은 상태와 액션 함수의 타입을 정의해줍니다.
export interface ExempleState {
  exemple: string;
  setExemple: (newExemple: string) => void;
}

export interface CategoryState {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

import { create } from "zustand";
import { ExampleState } from "./storeType";

// 0. storeType.ts에서 타입 선언
// 1. create를 이용해 스토어를 생성
// 2. create<타입>()(...) 타입스크립트에서는 반드시 () 하나 더 넣어야함!
// 3. 필요에 따라 미들웨어를 적용한다.
const useExampleStore = create<ExampleState>()((set) => ({
  example: "예시",
  setExample: (newExample) => set((state) => ({ example: newExample })),
}));

// 미들웨어 적용 방법
// 1. devtools: redux 개발자 도구로 전역 상태를 확인하고 관리 할 수 있다. 다른 팀원도 볼 수 있게 devtools는 적용하는걸 추천한다!!!
// 적용 방법: 상태와 액션 부분을 devtools로 감싸고, 두번째 파라미터로 개발자 도구에서 구분할 스토어의 이름을 넣어준다.
// devtools((set) => ({...}), {name: "ExampleStore"})

// 2. persist: 전역상태가 새로고침, 탭 꺼짐 등의 이벤트 후에도 유지되길 원할 때 사용한다. 로컬스토리지, 세션스토리지, 기타스토리지 등등 에 저장가능!
// 적용방법: 상태와 액션 부분을 persist로 감싸고, 두번째 파라미터로 옵션을 설정한다.
// 옵션은 먼저 스토리지에 저장될 키를 name 속성으로 지정하고, 두번째 옵션에서 저장할 스토리지를 선택한다. 스토리지는 기본이 로컬이며, 로컬은 새로고침, 탭이동, 브라우저 닫기에도 유지 되고, 세션 스토리지는 새로고침시에만 유지되며 나머지 상황은 스토리지가 초기화된다. 세번째 옵션은 스토어의 상태들 중 스토리지에 영구적으로 저장할 상태들을 지정해 선택적으로 적용할 수 있다.
// persist((set) => ({...}), {name: "example", storage: createJSONStorage(() => localStorage/sessionStorage), partialize: (state) => ({ example: state.example }), })

// 둘다 필요시 devtools를 제일 겉에서 감싸는걸 추천한다고함. ex) devtools(persist(...))

// 어떻게 사용해?
// const example = useExampleStore((state) => state.example);
// const setExample = useExampleStore((state) => state.setExample);
// 위 예시 코드처럼 사용하려는 곳에서 훅 처럼 호출해서 사용하면 된다.
// 주의할점은 구조분해 할당을 이용해 한번에 호출하면 안된다. 이 경우 서로 영향을 줘서 불필요한 부분까지 재렌더링을 유발할 수 있다고한다.
// Bad Code:
// const {example, setExample} = useExampleStore();

export default useExampleStore;

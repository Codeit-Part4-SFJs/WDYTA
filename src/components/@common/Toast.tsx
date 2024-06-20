interface ToastProp {
  text: string;
}

export const Toast = ({ text }: ToastProp) => {
  return (
    <div className="w-[200px] flex py-[10px] px-4 items-center justify-center gap-[10px] rounded-lg text-center leading-7 font-normal not-italic text-base bg-main-gradation text-white">
      {text}
    </div>
  );
};

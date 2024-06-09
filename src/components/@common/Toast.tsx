interface ToastProp {
  text: string;
}

export const Toast = ({ text }: ToastProp) => {
  return (
    <div className="absolute top-[250px] right-1/2 translate-x-1/2 flex py-[10px] px-4 items-start gap-[10px] rounded-lg text-center leading-7 font-normal not-italic text-base bg-main-gradation text-white">
      {text}
    </div>
  );
};

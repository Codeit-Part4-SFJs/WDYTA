export const MainSectionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="mobile:px-5 md:px-[30px] lg:px-[120px]">
      {children}
    </section>
  );
};

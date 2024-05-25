import GnbLogo from "./GnbLogo";
import GnbSearch from "./GnbSearch";

const Gnb = () => {
  return (
    <header>
      {/* 로고, 서치, 유저기능, 햄버거 메뉴 */}
      <GnbLogo />
      <GnbSearch />
    </header>
  );
};

export default Gnb;

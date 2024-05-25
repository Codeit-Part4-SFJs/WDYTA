import GnbLogo from "./GnbLogo";
import GnbSearch from "./GnbSearch";
import GnbUser from "./GnbUser";

const Gnb = () => {
  return (
    <header>
      {/* 로고, 서치, 유저기능, 햄버거 메뉴 */}
      {/* <GnbHamburgerMenu /> */}
      <GnbLogo />
      <GnbSearch />
      <GnbUser />
    </header>
  );
};

export default Gnb;

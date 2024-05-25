import GnbHamburgerMenu from "./GnbHamburgerMenu";
import GnbLogo from "./GnbLogo";
import GnbSearch from "./GnbSearch";
import GnbUser from "./GnbUser";

const Gnb = () => {
  return (
    <header>
      <GnbHamburgerMenu />
      <GnbLogo />
      <GnbSearch />
      <GnbUser />
    </header>
  );
};

export default Gnb;

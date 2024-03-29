import Logo from '../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import logo from '../../../images/logo.png';
import CellPhone from '../CellPhone/CellPhone';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo logo={logo} />
        <Navigation />
        <CellPhone />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;

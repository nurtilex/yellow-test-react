import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/svg/bear-logo.svg';
import NavBar from '../NavBar/NavBar';

import classes from './Header.module.scss';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const handleLogoClick = () => navigate('../jogs');
  return (
    <header className={classes.Header}>
      <div className={classes.Logo} onClick={handleLogoClick}>
        <img src={Logo} alt="Bear Logo" />
      </div>
      {isLoggedIn && <NavBar />}
    </header>
  );
};

export default Header;

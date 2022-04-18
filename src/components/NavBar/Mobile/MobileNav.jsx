import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import classes from './MobileNav.module.scss';
import Burger from '../../../assets/images/menu.png';
import GreenLogo from '../../../assets/images/logo@2x.png';

const MobileNav = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const inputs = [
    { name: 'jogs', path: '/jogs' },
    { name: 'info', path: '/info' },
    { name: 'contact us', path: '/contactUs' },
  ];
  const handleLinkClick = (path) => {
    navigate(`../${path}`);
    setShow(false);
  };
  const handleLogoClick = () => {
    navigate('../jogs');
    setShow(false);
  };
  const handleBurgerClick = () => setShow(true);
  const handleCloseIconClick = () => setShow(false);
  return (
    <>
      <button className={classes.burger} onClick={handleBurgerClick}>
        <img src={Burger} alt="Burger Logo" />
      </button>
      {show && (
        <aside className={classes.mobileAside}>
          <header className={classes.mobileHeader}>
            <div className={classes.mobileLogo} onClick={handleLogoClick}>
              <img src={GreenLogo} alt="Green Bear Logo" />
            </div>
            <button className={classes.closeBtn} onClick={handleCloseIconClick}>
              +
            </button>
          </header>
          <nav className={classes.mobileNav}>
            <ul>
              {inputs.map(({ name, path }, i) => {
                return (
                  <li key={i}>
                    <a
                      className={pathname === path ? classes.active : ''}
                      onClick={() => handleLinkClick(path)}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
};

export default MobileNav;

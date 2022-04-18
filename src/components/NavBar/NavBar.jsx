import { useState, useEffect, useRef } from 'react';
import classes from './NavBar.module.scss';

import MobileNav from './Mobile';
import DesktopNav from './Desktop';

const NavBar = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  const getSize = () => setWidth(containerRef.current?.clientWidth * 2);
  useEffect(() => window.addEventListener('resize', getSize));

  return (
    <nav className={classes.NavBar} ref={containerRef}>
      {width < 700 ? <MobileNav /> : <DesktopNav />}
    </nav>
  );
};

export default NavBar;

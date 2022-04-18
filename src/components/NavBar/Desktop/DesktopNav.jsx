import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './DesktopNav.module.scss';

const DesktopNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const from = useSelector((state) => state.filtering.from);
  const to = useSelector((state) => state.filtering.to);
  const isFiltering = useMemo(
    () => from.length === 10 && to.length === 10,
    [from, to]
  );
  const inputs = [
    { name: 'jogs', path: '/jogs' },
    { name: 'info', path: '/info' },
    { name: 'contact us', path: '/contactUs' },
  ];
  const handleLinkClick = (path) => navigate(`..${path}`);

  return (
    <ul className={classes.desktopNav}>
      {inputs.map(({ name, path }, i) => {
        return (
          <li className={pathname === path ? classes.active : ''} key={i}>
            <a onClick={() => handleLinkClick(path)}>{name}</a>
          </li>
        );
      })}

      <li className={isFiltering ? classes.filterActive : classes.filter}></li>
    </ul>
  );
};

export default DesktopNav;

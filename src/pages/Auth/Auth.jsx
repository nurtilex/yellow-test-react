import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initAction } from '../../store/sagas';
import classes from './Auth.module.scss';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) navigate('../jogs', { replace: true });
  }, [isLoggedIn]);

  const handleLoginClick = () => dispatch(initAction());
  return (
    <div className={classes.Auth}>
      <div className={classes.wrapper}>
        <div className={classes.img}></div>
        <button className={classes.button} onClick={handleLoginClick}>
          Let me in
        </button>
      </div>
    </div>
  );
};

export default Auth;

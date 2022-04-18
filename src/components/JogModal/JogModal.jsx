import { useDispatch } from 'react-redux';
import { triggerPostAction } from '../../store/sagas';
import Cancel from '../../assets/svg/cancel.svg';
import classes from './JogModal.module.scss';

const JogModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { date, distance, time } = e.target;

    dispatch(
      triggerPostAction({
        date: new Date(date.value),
        distance: distance.value,
        time: time.value,
      })
    );
    onClose();
  };

  const handleInputFocus = (e) => (e.target.type = 'date');
  const handleInputBlur = (e) => (e.target.type = 'text');

  return (
    <form className={classes.JogModal} onSubmit={handleFormSubmit}>
      <button type="button" className={classes.closeBtn} onClick={onClose}>
        <img src={Cancel} alt="Cancel Button" />
      </button>
      <div className={classes.number}>
        <label htmlFor="distance">Distance</label>
        <input type="number" id="distance" required />
      </div>
      <div className={classes.number}>
        <label htmlFor="time">Time</label>
        <input type="number" id="time" required />
      </div>
      <div className={classes.date}>
        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
      </div>
      <input type="submit" value="Save" />
    </form>
  );
};

export default JogModal;

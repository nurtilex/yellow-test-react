import { useDispatch } from 'react-redux';
import { filteringActions } from '../../store/slices/filteringSlice';
import classes from './DatePicker.module.scss';

const DatePicker = () => {
  const dispatch = useDispatch();
  const { setFrom, setTo } = filteringActions;

  const handleInputFocus = (e) => (e.target.type = 'date');
  const handleInputBlur = (e) => (e.target.type = 'text');
  const handleFromChange = (e) => dispatch(setFrom(e.target.value));
  const handleToChange = (e) => dispatch(setTo(e.target.value));

  return (
    <form
      className={classes.DatePicker}
      onSubmit={() => console.log('date is submitted')}
    >
      <div className={classes.dateWrapper}>
        <label htmlFor="date-from">Date from</label>
        <input
          className={classes.dateInput}
          type="text"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleFromChange}
          name="date-from"
          id="date-from"
        />
      </div>
      <div className={classes.dateWrapper}>
        <label htmlFor="date-to">Date to</label>
        <input
          className={classes.dateInput}
          type="text"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleToChange}
          name="date-to"
          id="date-to"
        />
      </div>
    </form>
  );
};

export default DatePicker;

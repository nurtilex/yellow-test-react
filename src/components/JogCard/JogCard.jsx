import classes from './JogCard.module.scss';
import runningMan from '../../assets/images/icon.png';

const JogCard = ({ date, distance, time }) => {
  const speed = (distance / 60).toFixed(1);

  const d = new Date(+date * 1000);
  const dd = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
  const mm = d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth();
  const yyyy = d.getFullYear();

  let formattedDate = `${yyyy}-${mm}-${dd}`;
  return (
    <div className={classes.JogCard}>
      <div className={classes.wrapper}>
        <img src={runningMan} alt="Running Man" />
        <div className={classes.content}>
          <span className={classes.date}>{formattedDate}</span>
          <div>
            <span className={classes.bold}>Speed:</span>
            <span> {speed}</span>
          </div>
          <div>
            <span className={classes.bold}>Distance:</span>
            <span> {distance} km</span>
          </div>
          <div>
            <span className={classes.bold}>Time:</span>
            <span> {time} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JogCard;

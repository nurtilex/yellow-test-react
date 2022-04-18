import JogCard from '../JogCard';

import classes from './JogsList.module.scss';

const JogsList = ({ data }) => {
  return (
    <main className={classes.JogsList}>
      {data.map((jog, i) => (
        <JogCard {...jog} key={i} />
      ))}
    </main>
  );
};

export default JogsList;

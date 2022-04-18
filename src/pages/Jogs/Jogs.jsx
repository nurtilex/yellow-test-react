import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import NoJogsMessage from '../../components/NoJogsMessage';
import JogsList from '../../components/JogsList';
import JogModal from '../../components/JogModal';
import DatePicker from '../../components/DatePicker';

import classes from './Jogs.module.scss';
import Add from '../../assets/svg/add.svg';

const Jogs = () => {
  const from = useSelector((state) => state.filtering.from);
  const to = useSelector((state) => state.filtering.to);
  const jogs = useSelector((state) => state.user.jogs);
  const [showForm, setShowForm] = useState(false);
  const filteredJogs = useMemo(() => {
    const isFiltering = from.length === 10 && to.length === 10;
    if (!isFiltering) return jogs;
    const compareDates = (a, b) => {
      const [aYear, aMonth, aDay] = a.split('-').map(Number);
      const [bYear, bMonth, bDay] = b.split('-').map(Number);

      if (aYear > bYear) return true;
      if (aYear === bYear) {
        if (aMonth > bMonth) return true;
        if (aMonth === bMonth) {
          if (aDay > bDay) return true;
        }
      }

      return false;
    };
    return jogs.filter(({ date }) => {
      const d = new Date(+date * 1000);
      const dd = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
      const mm = d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth();
      const yyyy = d.getFullYear();

      let formattedDate = `${yyyy}-${mm}-${dd}`;

      return (
        compareDates(formattedDate, from) && compareDates(to, formattedDate)
      );
    });
  }, [from, to, jogs]);

  const handleAddButton = () => setShowForm(true);
  const handleCloseButton = () => setShowForm(false);

  return (
    <section className={classes.Jogs}>
      {jogs.length === 0 ? (
        <NoJogsMessage />
      ) : !showForm ? (
        <>
          <DatePicker />
          <JogsList data={filteredJogs} />
          <button className={classes.add} onClick={handleAddButton}>
            <img src={Add} alt="Add button" />
          </button>
        </>
      ) : (
        <JogModal onClose={handleCloseButton} />
      )}
    </section>
  );
};

export default Jogs;

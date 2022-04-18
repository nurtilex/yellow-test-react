import { useState } from 'react';

import JogModal from '../JogModal';

import classes from './NoJogsMessage.module.scss';
import SadFace from '../../assets/svg/sad-rounded-square-emoticon.svg';

const NoJogsMessage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleCreateButton = () => setShowForm(true);
  const handleCloseButton = () => setShowForm(false);
  return (
    <div className={classes.NoJogs}>
      {!showForm ? (
        <>
          <div className={classes.message}>
            <img src={SadFace} alt="Sad Face" />
            <span>Nothing is there</span>
          </div>

          <button className={classes.createBtn} onClick={handleCreateButton}>
            Create your jog first
          </button>
        </>
      ) : (
        <JogModal onClose={handleCloseButton} />
      )}
    </div>
  );
};

export default NoJogsMessage;

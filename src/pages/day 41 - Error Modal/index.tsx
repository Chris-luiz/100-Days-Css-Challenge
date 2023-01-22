import { useState } from 'react';
import style from './style.module.css'

export const Day41 = () => {

  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(true);

  return (
    <div className={style.day_41_container}>
      <div className={isErrorModalOpen ? `${style.label} ` :  `${style.label} ${style.scale_none}`}>

        <img src="https://100dayscss.com/codepen/alert.png" width="80" height="30" />

        <h2>Oh snap!</h2>
        <p>An error has occured while creating an error report</p>

        <button className={style.button} onClick={() => setIsErrorModalOpen(false)}>Dismiss</button>

      </div>
    </div>
  );
}
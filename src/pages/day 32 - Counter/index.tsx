import { useEffect, useState } from 'react';
import style from './style.module.css';


export const Day32 = () => {

  const [count, setCount] = useState<number>(0);
  const [isUpClicked, setIsUpClicked] = useState<boolean>(false);
  const [isDownClicked, setIsDownClicked] = useState<boolean>(false);

  const clickUp = () => {
    setCount(count + 1);
    setIsUpClicked(true);
  }

  const clickDown = () => {
    setCount(count - 1);
    setIsDownClicked(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsUpClicked(false)
      setIsDownClicked(false)
    }, 500)
  }, [isUpClicked, isDownClicked]);

  return (
    <div className={style.container}>
      <div className={style.panel}>

        <div className={style.minus} onClick={clickDown}></div>
        <div className={
          isUpClicked ? `${style.pulseUp} ${style.number}` :
            isDownClicked ? `${style.pulseDown} ${style.number}` :
              `${style.number}`}>
          {count}
        </div>
        <div className={style.plus} onClick={clickUp}></div>

      </div>
    </div>
  );
}
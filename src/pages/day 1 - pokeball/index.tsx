import { useEffect, useState } from 'react';
import style from './style.module.css';

export const Day1 = () => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (isToggled) 
      setTimeout(() => setIsToggled(false), 1000)
  }, [isToggled]);

  return (
    <div id={style.day_1_container}>
      <div id={style.pokeball}>
        <div id={style.pokeball_body}>
          <div id={style.pokeball_up} className={isToggled ? style.open_up : ''}></div>
          <div id={style.pokeball_down} className={isToggled ? style.open_down : ''}></div>
        </div>

        <div id={style.pokeball_blank_up} className={isToggled ? style.open_up : ''}></div>
        <div id={style.pokeball_blank_down} className={isToggled ? style.open_down : ''}></div>

        <div id={style.pokeball_visor} onClick={() => setIsToggled(true)}>
          <div id={style.pokeball_visor_line}></div>
        </div>
      </div>
      <div id="pokeball-shadow"></div>
    </div>
  )
}
import { useMemo } from 'react';
import style from './style.module.css'

export const Day66 = () => {
  return (
    <div className={style.container}>
      <input type="checkbox" id="press-me" className={style.button} />
      <label htmlFor="press-me" className={style.label}></label>

      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
      <span className={style.sparkle}></span>
    </div>
  );
}
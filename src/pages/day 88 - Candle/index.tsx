import style from './style.module.css';

export const Day88 = () => {
  return (
    <div className={style.day_88_container}>
      <div className={style.candle}>
        <div className={style.candle_fire}></div>
        <div className={style.candle_stick}></div>
        <div className={style.candle_body}>
          <div className={style.candle_shadow}></div>
        </div>
        <div className={style.candle_base}></div>
      </div>
    </div>
  );
}
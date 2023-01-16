import style from './style.module.css';

export const Day33 = () => {
  return (
    <div className={style.day_33_container}>
      <div className={style.sun}></div>

      <div className={style.clound}>
        <div className={style.circle}>
          <div className={style.bar}></div>
        </div>
        <div className={style.circle}>
          <div className={style.bar}></div>
        </div>
        <div className={style.circle}>
          <div className={style.bar}></div>
        </div>
        <div className={style.base}>
          <div className={style.bar}></div>
        </div>
      </div>

      <div className={style.clound}>

        <div className={style.circle}>
          <div className={style.bar}></div>
        </div>
        <div className={style.circle}>
          <div className={style.bar}></div>
        </div>
        <div className={style.circle}>
          <div className={style.bar}></div>
        </div>
        <div className={style.circle}>
          <div className={style.bar}></div>
        </div>
        <div className={style.base}>
          <div className={style.bar}></div>
        </div>
      </div>
     
    </div>
  );
}
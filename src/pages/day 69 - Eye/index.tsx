import style from './style.module.css';

export const Day69 = () => {
  return (
    <>
      <div className={style.day_69_container}>
        <div className={style.top}></div>
        <div className={style.eye}>
          <div className={style.eye_circle}>
            <div className={style.eye_pupil}></div>
          </div>
        </div>
        <div className={style.bottom}></div>
      </div>
    </>
  );
}
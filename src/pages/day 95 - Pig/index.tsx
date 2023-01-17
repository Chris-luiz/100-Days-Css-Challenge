import style from './style.module.css';

export const Day95 = () => {
  return (
    <div className={style.day_95_container}>
      <div className={style.pig}>
        <div className={style.pig_left_ear}>
          <div className={style.pig_left_ear_hole}></div>
        </div>
        <div className={style.pig_right_ear}>
          <div className={style.pig_right_ear_hole}></div>
        </div>

        <div className={style.pig_head}>
          <div className={style.pig_left_eye}>
            <div className={style.pig_left_pupil}></div>
          </div>
          <div className={style.pig_right_eye}>
            <div className={style.pig_right_pupil}></div>
          </div>

          <div className={style.pig_nose}>
            <div className={style.pig_nose_left}></div>
            <div className={style.pig_nose_right}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
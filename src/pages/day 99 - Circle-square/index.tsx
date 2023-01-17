import style from './style.module.css';

export const Day99 = () => {
  return (
     <div className={`${style.day_99_container} ${style.flex_container}`}>
        <input type="checkbox" id="checkbox_99" />

        <div className={style.grow_back_circle}></div>
        <div className={style.grow_back_circle_border}></div>

        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>
        <div className={style.sparkle}></div>

        <label htmlFor='checkbox_99' className={style.label_checkbox_99}></label>
    </div>
  );
}
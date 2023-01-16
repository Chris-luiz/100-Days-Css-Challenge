import style from './style.module.css'

export const Day64 = () => {
  return (
    <div className={style.day_64_container}>
      <div className={style.buttons}>
        <button className={`${style.front_button} ${style.button}`}>HOVER ME</button>
        <button className={`${style.back_button} ${style.button}`}></button>
      </div>
    </div>
  );
}
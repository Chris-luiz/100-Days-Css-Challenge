import style from './style.module.css';

export const Day3 = () => {
  return (
    <div className={style.container}>
      <div className={style.background}>

        <div className={style.sky}></div>

        <div className={style.piramid}></div>
        <div className={style.primarid_left_side}></div>
        <div className={style.sun}></div>

        <div className={style.terrain}></div>
        <div className={style.shadow}></div>
      </div>
    </div>)
}
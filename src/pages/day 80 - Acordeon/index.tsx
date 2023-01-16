import style from './style.module.css'

export const Day80 = () => {
  return (
    <>
      {/* <h1 id="title">Acordeon</h1> */}
      <div className={style.day_80_container}>
        <div className={`${style.acordeon} ${style.acordeon1}`}>first</div>
        <div className={`${style.acordeon} ${style.acordeon2}`}>second</div>
        <div className={`${style.acordeon} ${style.acordeon3}`}>third</div>
        <div className={`${style.acordeon} ${style.acordeon4}`}>fourth</div>
      </div>
    </>
  );
}
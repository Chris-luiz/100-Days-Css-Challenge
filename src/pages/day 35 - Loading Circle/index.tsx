import style from './style.module.css';

export const Day35 = () => {
  return (
    <div className={style.day_35_container}>
      <svg width="100px" height="100px" viewBox="0 0 100 100">
        <circle className={style.bg} cx="50" cy="50" r="46" />
        <circle className={style.loader} cx="50" cy="50" r="46" />
      </svg>
    </div>
  );
}
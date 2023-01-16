import style from './style.module.css';

export const Day82 = () => {
  return (
    <div className={style.day_82_container}>
      <label htmlFor={style.action_checkbox} className={style.day_82_label}>
        <input type="checkbox" id={style.action_checkbox} />
        <div className={`${style.day_82_button} ${style.done_button}`}>
          <span>done</span>
        </div>
        <div className={`${style.day_82_button} ${style.send_button}`}>
          <span>send</span>
        </div>
      </label>
    </div>
  );
}
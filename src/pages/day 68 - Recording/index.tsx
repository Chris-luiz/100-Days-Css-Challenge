import style from './style.module.css';

export const Day68 = () => {
  return (
    <div className={style.day68_container}>
      <input type="checkbox" id={style.mic_checkbox} />

      <svg className={style.day68_svg}>
        <circle className={style.day68_circle_svg} />
      </svg>

      <label htmlFor={style.mic_checkbox} className={style.mic}>

        <div className={style.mic_body}>
          <div className={style.mic_body_inner}></div>
        </div>

        <div className={style.mic_sustentation}></div>
        <div className={style.mic_base}></div>

      </label>

      <label htmlFor={style.mic_checkbox} className={style.mic_waiting}>

        <div className={style.mic_circle_waiting}></div>
        <div className={style.mic_circle_waiting}></div>
        <div className={style.mic_circle_waiting}></div>

      </label>

    </div>
  );
}
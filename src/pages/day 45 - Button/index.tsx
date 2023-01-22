import style from './style.module.css'

export const Day45 = () => {
  return (
    <div className={style.day_45_container}>
      <div className={style.hover_button}>
        <span>Hover me</span>
        <svg width="180px" height="60px" viewBox="0 0 180 60" className={style.button_border}>
          <polyline points="179,1 179,59 1,59 1,1 179,1" className={style.bg_line} />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className={style.hl_line} />
        </svg>
      </div>
    </div>
  );
}
import style from './style.module.css';

export const Day55 = () => {
  return (
    <div className={`${style.day_55_container} ${style.flex_content}`}>
      <div className={style.thermostat}>
        <div className={`${style.thermostat_border} ${style.flex_content}`}>
          <div className={style.thermostat_clean_down}></div>

          <div className={`${style.thermostat_content} ${style.flex_content} ${style.column}`}>

            <div className={style.meter}></div>

            <div className={style.thermostat_content_degree_thermic}>23°</div>

            <div className={style.flex_content}>
              <div className={style.thermostat_content_degree}>
                <span className={style.degree}>19</span>°
              </div>
              <div className={style.thermostat_content_degree} >
                <span className={style.degree}>20</span>°
              </div>
            </div>

            <div className={style.thermostat_content_location}>Bedroom</div>
          </div>
        </div>
      </div>
    </div>
  );
}
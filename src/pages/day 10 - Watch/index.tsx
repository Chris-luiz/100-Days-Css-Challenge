import style from './style.module.css';

export const Day10 = () => {
  return (
    <div className={style.day_10_container}>
      <div className={style.watch}>
        <div className={style.watch_shadow}>
          <div className={style.watch_border}>

            <svg>
              <circle cx="160" cy="176" r="150" stroke="red" stroke-width="3" fill="none" style={{position: 'absolute'}} ></circle>
            </svg>

            <div className={style.watch_interface}>
              <div className={style.watch_date}>MON 15 JAN 2015</div>
              <div className={style.watch_hours}>11:42</div>
              <div className={style.watch_steps}>
                <span>81</span>
                <span>1248 KCAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
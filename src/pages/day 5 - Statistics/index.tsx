import styles from './style.module.css';

export const Day5 = () => {
  return (
    <div className={styles.day_5_container}>
      <div className={styles.table}>
        <div className={styles.table_header}>
          <div className={styles.table_header_left}>
            <span className={styles.table_header_left_title}>weekly report</span>
            <span className={styles.table_header_left_dateRate}>01.Feb - 07.Feb</span>
          </div>
          <div className={styles.table_header_right}>
            <span className={styles.table_header_right_title}>Revenue</span>
            <span className={styles.table_header_right_price}>$ 3621.79</span>
          </div>
        </div>
        <div className={styles.table_content}>
          <div className={styles.table_content_legends}>
            <span className={styles.table_content_legend}>Views</span>
            <span className={styles.table_content_legend}>Purchase</span>
          </div>

          <div className={styles.table_content_graphic}>
            <span className={styles.table_content_back_line}></span>
            <span className={styles.table_content_back_line}></span>
            <span className={styles.table_content_back_line}></span>

            <span className={styles.data_red}>
              <span className={styles.tooltip_red}></span>
              <span className={styles.tooltip_red}></span>
              <span className={styles.tooltip_red}></span>
              <span className={styles.tooltip_red}></span>
              <span className={styles.tooltip_red}></span>
              <span className={styles.tooltip_red}></span>
              <span className={styles.tooltip_red}></span>

              <svg height="50" width="400">
                <polyline className="polyline" points="9,45 65,12 120,25 180,11 215,32 250,45 320,15"
                  style={{
                    fill: 'none',
                    stroke: '#ff4242',
                    strokeWidth: 2,
                    position: 'relative'
                  }}
                />
              </svg>
            </span>

            <span className={styles.data_blue}>
              <span className={styles.tooltip_blue}></span>
              <span className={styles.tooltip_blue}></span>
              <span className={styles.tooltip_blue}></span>
              <span className={styles.tooltip_blue}></span>
              <span className={styles.tooltip_blue}></span>
              <span className={styles.tooltip_blue}></span>
              <span className={styles.tooltip_blue}></span>

              <svg height="100" width="400">
                <polyline className="polyline" points="9,61 65,50 120,65 180,55 215,40 250,65 320,50"
                  style={{
                    fill: 'none',
                    stroke: '#7474ff',
                    strokeWidth: 2,
                    position: 'relative'
                  }}
                />
              </svg>
            </span>
          </div>

          <div className={styles.table_content_days}>
            <div className={styles.table_content_day}>mon</div>
            <div className={styles.table_content_day}>tue</div>
            <div className={styles.table_content_day}>wed</div>
            <div className={styles.table_content_day}>thu</div>
            <div className={styles.table_content_day}>fri</div>
            <div className={styles.table_content_day}>sat</div>
            <div className={styles.table_content_day}>sun</div>
          </div>
        </div>
      </div>
    </div>
  )
}
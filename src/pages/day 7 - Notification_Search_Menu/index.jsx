import { useState } from 'react';
import style from './style.module.css';

export const Day7 = () => {

  const [isToggleLateralMenu, setIsToggleLateralMenu] = useState(false);
  const [isToggleNotifications, setIsToggleNotifications] = useState(false);

  return (
    <div className={style.day_7_container}>
      <div className={!isToggleLateralMenu ? style.lateral_menu : `${style.lateral_menu} ${style.move_lateral_menu}`}>
        <div className={style.lateral_menu_item}>
          <p>&#9633 Dashboard</p>
        </div>
        <div className={style.lateral_menu_item}>
          <p>&#9633 Profile</p>
        </div>
        <div className={style.lateral_menu_item}>
          <p>&#9633 Notifications</p>
        </div>
        <div className={style.lateral_menu_item}>
          <p>&#9633 Messages</p>
        </div>
        <div className={style.lateral_menu_item}>
          <p>&#9633 Settings</p>
        </div>
      </div>

      <div className={!isToggleLateralMenu ? style.notification : `${style.notification} ${style.move_notification}`}>

        <div className={style.notification_heading}>
          <div
            className={!isToggleNotifications ? style.notification_heading_menu : `${style.notification_heading_menu} ${style.hide}`}
            onClick={() => setIsToggleLateralMenu(!isToggleLateralMenu)}
          >
            <div className={`${style.top_line} ${style.widget}`}></div>
            <div className={style.top_circle}></div>
            <div className={`${style.bot_line} ${style.widget}`}></div>
          </div>

          <input
            type='text'
            className={!isToggleNotifications ? style.notification_search : `${style.notification_search} ${style.notification_search_show}`} placeholder='Search ...'
          />

          <p className={!isToggleNotifications ? style.notification_heading_title : `${style.notification_heading_title} ${style.hide}`}>Notifications</p>
          <p
            className={style.notification_heading_search}
            onClick={() => setIsToggleNotifications(!isToggleNotifications)}>&#9633
          </p>
        </div>

        <div className={style.notification_body}>

          <div className={style.notification_body_flow}>
            <div className={style.line}></div>

            <div className={style.circle}></div>
            <div className={style.circle}></div>
            <div className={style.circle}></div>
          </div>

          <div className={style.notification_body_message}>
            <div className={style.notification_body_item}>
              <span className={style.time}>9:24 AM</span>
              <p><strong>John Walker</strong> posted a photo on your wall.</p>
            </div>

            <div className={style.notification_body_item}>
              <span className={style.time}>8:19 AM</span>
              <p><strong>Alice Parker</strong> commented your last post.</p>
            </div>

            <div className={style.notification_body_item}>
              <span className={style.time}>Yesterday</span>
              <p><strong>Luke Wayne</strong> added you as friend.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
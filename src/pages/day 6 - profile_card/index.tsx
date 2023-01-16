import style from './style.module.css';

import { StatisticCard } from './components/StatiscCard';

export const Day6 = () => {
  return (
    <div className={style.day_6_container}>
      <div className={style.card}>

        <div className={style.profile}>
          <div className={style.profile_info}>
            <img className={style.profile_img} src="/assets/user.png" alt="foto de perfil" />
            <p className={style.profile_name}>Christian Luiz</p>
            <p className={style.profile_job}>Visual Arts</p>
          </div>

          <div className={style.profile_actions}>
            <a href="#" className={style.btn}>Follow</a>
            <a href="#" className={style.btn}>Message</a>
          </div>
        </div>

        <StatisticCard count='523' name='posts' className={style.posts}/>
        <StatisticCard count='1387' name='likes' className={style.likes}/>
        <StatisticCard count='146' name='followers' className={style.followers}/>

      </div>
    </div>
  )
}
import style from './style.module.css';

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

        <div className={`${style.label} ${style.posts}`} >
          <p className={style.label_info}>523</p>
          <p className={style.label_area}>posts</p>
        </div>

        <div className={`${style.label} ${style.likes}`} >
          <p className={style.label_info}>1387</p>
          <p className={style.label_area}>likes</p>
        </div>

        <div className={`${style.label} ${style.followers}`} >
          <p className={style.label_info}>146</p>
          <p className={style.label_area}>followers</p>
        </div>

      </div>
    </div>
  )
}
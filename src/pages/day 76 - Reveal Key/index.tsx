import style from './style.module.css';

export const Day76 = () => {
  return (
    <div className={style.day_76_container}>
      <span className={style.secret_key}>
        <p>MD5-SU3-CX8</p>
      </span>


      <input
        type="text"
        pattern='[pP]assword'
        placeholder='Enter a "Password"'
        className={style.password_input}
        required
      />
      <span className={style.secret_key_name}>
        <p>Secret Key</p>
      </span>

    </div>

  )
}
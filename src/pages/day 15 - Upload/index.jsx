import style from './style.module.css';

export const Day15 = () => {
  return (
    <div className={style.day_15_container}>
      <div className={style.upload}>
        <div className={style.upload_header}>
          <span>Drop file to upload</span>
        </div>

        <div className={style.upload_content}>
          <div className={style.img}>
            <label htmlFor={style.input_file} className={style.label}>
              <img src="https://100dayscss.com/codepen/upload.svg" />
              <input type='file' id={style.input_file} />
            </label>
          </div>
          <form encType="multipart/form_data">
            <button className={style.upload_content_button}>Upload File</button>
          </form>
        </div>
      </div>
    </div>
  )
}
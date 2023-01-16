import style from './style.module.css'

export const Day73 = () => {
  return (
     <div className={style.day_73_container}>
        <div className={style.frame}>
            <div className={style.word}>I'm a</div>
            <div className={style.carousel}>
                <div className={style.content}>
                    <p>Leopard</p>
                    <p>Tiger</p>
                    <p>Jaguar</p>
                    <p>Panther</p>
                </div>
            </div>
        </div>
    </div>
  )
}
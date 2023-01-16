import style from './style.module.css'

export const Day74 = () => {
    return (
        <div className={style.day_74_container}>
            
            <input type="radio" name="paginator" id={style.page_1} />
            <label htmlFor={style.page_1} className={style.page}>1</label>

            <input type="radio" name="paginator" id={style.page_2} />
            <label htmlFor={style.page_2} className={style.page}>2</label>

            <input type="radio" name="paginator" id={style.page_3} />
            <label htmlFor={style.page_3} className={style.page}>3</label>

            <input type="radio" name="paginator" id={style.page_4} />
            <label htmlFor={style.page_4} className={style.page}>4</label>

        </div>
    )
}
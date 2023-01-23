import style from './style.module.css';

export const Day2 = () => {
    return (
        <div className={style.day_2_container}>
            <input type="checkbox" id={style.menu_icon} />

            <label htmlFor={style.menu_icon} className={style.menu_icon_cross}>
                <div className={style.menu_line_1}></div>
                <div className={style.menu_line_2}></div>
                <div className={style.menu_line_3}></div>
            </label>
        </div>
    );
}
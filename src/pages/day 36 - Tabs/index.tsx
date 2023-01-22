import style from './style.module.css';

export const Day36 = ()  => {
  return (
     <div className={style.day_36_container}>
        <div className={style.modal}>
            <div className={style.tabs}>
                <ul className={style.ul}>
                    <li>&#9633;</li>
                    <li>&#9633;</li>
                    <li>&#9633;</li>
                    <li>&#9633;</li>
                </ul>
                <ul>
                    <li>&#9633;</li>
                </ul>
            </div>
            <div className={style.content}></div>
        </div>
    </div>
  );
}
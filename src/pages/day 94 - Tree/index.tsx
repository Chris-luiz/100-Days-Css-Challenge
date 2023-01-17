import style from './style.module.css';

export const Day94 = () => {
  return (
    <div className={style.day_94_container}>
      <div className={style.tree}>

        <div className={style.tree_body}>

          <div className={style.tree_back_paper_left}></div>
          <div className={style.tree_back_paper_right}></div>

          <div className={style.left_wood}></div>
          <div className={style.tree_main_stick}></div>
          <div className={style.right_wood}></div>

        </div>

        <div className={style.tree_base}></div>
      </div>
    </div>
  );
}
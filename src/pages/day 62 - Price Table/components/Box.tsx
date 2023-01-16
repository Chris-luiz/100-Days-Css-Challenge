import style from '../style.module.css';

interface BoxProps {
  signature: string;
  price: string;
}

export const Box = ({ signature, price }: BoxProps) => {
  return (
    <div className={style.box}>
      <div className={`${style.box_top}  ${style.flex_center}`}>
        <span>{signature}</span>
      </div>
      <div className={`${style.box_body} ${style.flex_center}`}>
        <div className={style.box_body_header}>
          <div className={style.box_body_price}>{price}$</div>
          <div className={style.box_body_span}>per month</div>
        </div>

        <div className={`${style.lines} ${style.flex_center}`}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>

      </div>
    </div>
  )
}
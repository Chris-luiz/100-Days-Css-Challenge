import style from '../style.module.css'

interface DateDayProps {
  name: string;
  number: string;
}

export const DateDay = ({ name, number }: DateDayProps) => {
  return (
    <div className={style.date}>
      <span className={style.date_day}>{name}</span>
      <span className={style.date_number}>{number}</span>
    </div>
  );
}
import style from '../style.module.css';

interface StatisticCardProps {
  count: string;
  name: string;
  className: string;
}

export const StatisticCard = ({ count, name, className }: StatisticCardProps) => {
  return (
    <div className={`${style.label} ${className}`} >
      <p className={style.label_info}>{count}</p>
      <p className={style.label_area}>{name}</p>
    </div>
  )
}
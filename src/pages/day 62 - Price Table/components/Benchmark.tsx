import style from '../style.module.css';

interface BenchmarkProps {
  min_value: string;
  max_value: string;
}

export const Benchmark = ({ min_value, max_value }: BenchmarkProps) => {
  return (
    <div className={style.benchmark}>
      <div className={style.min_value}>{min_value}</div>
      <div className={style.max_value}>{max_value}</div>
      <div className={style.progress_bar}>
        <div className={style.valid_progress_bar}></div>
      </div>
    </div>
  )
};
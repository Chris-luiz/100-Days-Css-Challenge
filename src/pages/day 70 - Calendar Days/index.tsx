import style from './style.module.css'

import { DateDay } from './components/DateDay';

export const Day70 = () => {
  return (
    <div className={style.day_70_container}>
      <div className={style.calendar}>
        <DateDay name='Friday' number='15' />
        <DateDay name='Saturday' number='16' />
        <DateDay name='Sunday' number='17' />
        <DateDay name='Monday' number='18' />
      </div>
    </div>
  );
}
import style from './style.module.css'

import { Box } from './components/Box';
import { Benchmark } from './components/Benchmark';

export const Day62 = () => {
  return (
    <div className={style.day_62_container}>

      <Box signature='Basic' price='5' />
      <Box signature='Pro' price='10' />
      <Box signature='Premium' price='20' />

      <div className={style.benchmarks}>

        <Benchmark min_value='5 users' max_value='100 users' />
        <Benchmark min_value='20 GB' max_value='200 GB' />
        <Benchmark min_value='1 Project' max_value='50 Projects' />

      </div>
    </div>
  );
}

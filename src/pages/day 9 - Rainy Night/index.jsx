import { useMemo } from 'react';
import style from './style.module.css';

export const Day9 = () => {

  const createLoops = (numberOfLoop) => {
    const loop = Array();
    for (let i = 0; i < numberOfLoop; i++) {
      loop.push(i);
    }
    return loop;
  }

  const handleLoop = createLoops(10);
  const crateerLoop = createLoops(11);
  const weatherCloud = createLoops(5);

  const bigDrop = Array();
  const bigDropBefore = Array();
  const bigDropAfter = Array();
  const mediumDrop = Array();
  const mediumDropBefore = Array();
  const mediumDropAfter = Array();
  const smallDrop = Array();
  const smallDropBefore = Array();
  const smallDropAfter = Array();

  for (let i = 0; i < 10; i++) {
    bigDrop.push({
      position: 'absolute',
      zIndex: 20,
      left: (-20 + 38 * `${i}`) + 'px',
      bottom: 0,
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#7FC1F9',
      transformOrigin: '50% 100%',
      animation: 'drop ' + (0.7 + Math.random(1, 20) / 10) + 's linear ' + (Math.random(1, 50) / 25) + 's infinite both',
      '&::before': {
        position: 'absolute',
        content: '',
        display: 'block',
        top: '-2px',
        left: '1px',
        width: '6px',
        height: '6px',
        background: '#7FC1F9',
        borderRadius: '3px',
      },
      '::after': {
        position: 'absolute',
        content: '',
        display: 'block',
        top: '-5px',
        left: '2px',
        width: '4px',
        height: '10px',
        background: '#7FC1F9',
        borderRadius: '50%',
      }
    });

    bigDropBefore.push({
      position: 'absolute',
      content: '',
      display: 'block',
      top: '-2px',
      left: '1px',
      width: '6px',
      height: '6px',
      background: '#7FC1F9',
      borderRadius: '3px',
    });

    bigDropAfter.push({
      position: 'absolute',
      content: '',
      display: 'block',
      top: '-5px',
      left: '2px',
      width: '4px',
      height: '10px',
      background: '#7FC1F9',
      borderRadius: '50%',
    });

    mediumDrop.push({
      position: 'absolute',
      zIndex: 20,
      left: (-20 + 58 * `${i}`) + 'px',
      bottom: 0,
      borderRadius: '50%',
      backgroundColor: '#7FC1F9',
      transformOrigin: '50% 100%',
      opacity: 0.6,
      width: '6px',
      height: '6px',
      animation: 'drop ' + (1.3 + Math.random(1, 2) / 10) + 's linear ' + (Math.random(1, 50) / 25) + 's infinite',
      animationFillMode: 'both',
    })

    mediumDropBefore.push({
      top: '-2px',
      left: '1px',
      width: '4px',
      height: '4px',
    });

    mediumDropAfter.push({
      top: '-4px',
      left: '2px',
      width: '2px',
      height: '6px',
    });

    smallDrop.push({
      position: 'absolute',
      zIndex: 20,
      left: (-20 + 58 * `${i}`) + 'px',
      bottom: 0,
      borderRadius: '50%',
      backgroundColor: '#7FC1F9',
      transformOrigin: '50% 100%',
      opacity: 0.3,
      width: '4px',
      height: '4px',
      animation: 'drop ' + (1.9 + Math.random(1, 2) / 10) + 's linear ' + (Math.random(1, 50) / 25) + 's infinite',
      animationFillMode: 'both',
    });

    smallDropBefore.push({
      top: '-2px',
      left: '1px',
      width: '2px',
      height: '2px',
    });

    smallDropAfter.push({
      top: '-3px',
      left: '1px',
      width: '2px',
      height: '4px',
    });
  }

  return (
    <>
      <div className={style.day_9_container}>
        <div className={style.weather}>
          <div className={style.weather_animation}>
{/* 
            {handleLoop.map((_, index) => (
              <div style={smallDrop[index]}></div>
            ))}

             {handleLoop.map((_, index) => (
              <div style={mediumDrop[index]}></div>
            ))} */}

             {handleLoop.map((_, index) => (
              <div style={bigDrop[index]}></div>
            ))}

            {/* <?php for($i=0; $i < 10; $i++): ?> */}
            {/* <div className=small_drop_<?= $i ?>></div> */}
            {/* <?php endfor; ?> */}

            {/* <?php for($i=0; $i < 10; $i++): ?> */}
            {/* <div className=medium_drop_<?= $i ?>></div> */}
            {/* <?php endfor; ?> */}

            {/* <?php for($i=0; $i < 10; $i++): ?> */}
            {/* <div className=big_drop_<?= $i ?>></div> */}
            {/* <?php endfor; ?> */}

            <div className={style.weather_animation_moon}>
              <div className={style.moon}>
                <div className={style.moon_crater}>

                  {crateerLoop.map((_, index) => {
                    <div className={style.crater}></div>
                  })}
                </div>
              </div>
            </div>
            <div className={style.weather_animation_clouds}>

              {weatherCloud.map((_, index) => {
                <div className={style.weather_animation_cloud}></div>
              })}

            </div>
          </div>

          <div className={style.weather_description}>
            <div className={style.weather_description_temperature}>
              <span className={style.temperute_number}>12°</span>
              <div className={style.temperature_details}>
                <span>Wind: E 7 km/h</span>
                <span>Humidity: 87%</span>
              </div>
            </div>
            <div className={style.weather_description_days}>
              <div className={style.weather_description_day}>
                <span>TUE</span>
                <span>WED</span>
              </div>
              <div className={style.weather_description_degrees}>
                <span>21° / 9°</span>
                <span>23° / 10°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
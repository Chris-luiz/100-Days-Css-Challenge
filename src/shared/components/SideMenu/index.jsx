import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { disabledDays } from './disabledDays';

import styles from './style.module.css';

export const SideMenu = () => {

  const navigate = useNavigate();

  const numbers = useMemo(() => {
    const element = new Array;
    for (let index = 1; index < 101; index++) {
      element.push(index);
    }
    return element;
  }, []);

  return (
    <aside>
      <div className={styles.profile}>
        <div className={styles.profile_personal}>
          <img src="/assets/user.png" alt="foto de perfil" />
          <h3>Christian Luiz de Souza Paes</h3>
        </div>

        <div className={styles.profile_content}>
          <ul>
            {numbers.map((day, index) => (
              <li
                key={`dia${day}`}
                className={disabledDays[index] ? `${styles.project} ${styles.disabled}` : `${styles.project}`}
                onClick={() => navigate(`dia${day}`)}
              >
                <div className={styles.archives}>
                  <div className={styles.explorer}>
                    <div className={`${styles.file} ${styles.file_span}`}></div>
                    <div className={`${styles.file} ${styles.file_back}`}></div>
                    <div className={`${styles.file} ${styles.file_document}`}></div>
                    <div className={`${styles.file} ${styles.file_front}`}></div>
                  </div>
                </div>
                <span>Dia {day}</span>
              </li >
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}


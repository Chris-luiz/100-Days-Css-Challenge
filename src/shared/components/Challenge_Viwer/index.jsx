import { Children } from 'react';
import styles from './style.module.css';

import { Day1 } from '../../../pages';
import { Router } from '../../../Routes/Router';

export const ChallengeViwer = ({ children }) => {
  return (
    <div className={styles.challenge_viwer}>
      <Router />
    </div>
  )

}
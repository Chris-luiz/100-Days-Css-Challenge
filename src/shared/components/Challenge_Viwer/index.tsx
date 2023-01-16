import { Children } from 'react';
import styles from './style.module.css';

import { Day1 } from '../../../pages';
import { Router } from '../../../Routes/Router';

interface ChallengeViwerProps {
  children?: React.ReactNode;
}

export const ChallengeViwer = ({ children }: ChallengeViwerProps) => {
  return (
    <div className={styles.challenge_viwer}>
      <Router />
    </div>
  )

}
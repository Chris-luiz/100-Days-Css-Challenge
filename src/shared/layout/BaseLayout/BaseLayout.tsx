import { SideMenu, ChallengeViwer, Nav } from '../../components';
import styles from './style.module.css';

export const BaseLayout = () => {
  return (
    <div className={styles.container_App}>
      <SideMenu />
      {/* <Nav /> */}
      <ChallengeViwer />
    </div>
  )
}
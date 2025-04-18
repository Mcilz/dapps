import { TabPanel } from '@/ui';
import { cx } from '@/utils';

import { tabs } from '../../config';
import { ProfileInfo } from '../ProfileInfo';

import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={cx(styles.layout)}>
      <h1 className={cx(styles.title)}>My Account</h1>
      <div className={cx(styles.content)}>
        <ProfileInfo />
        <TabPanel tabs={tabs} />
      </div>
    </div>
  );
}

export { Layout };

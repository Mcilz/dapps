import { getVaraAddress } from '@gear-js/react-hooks';
import Identicon from '@polkadot/react-identicon';
import { stringShorten } from '@polkadot/util';
import clsx from 'clsx';

import { PlayerType } from '@/types';

import styles from './Player.module.scss';

type Props = PlayerType & {
  isActive?: boolean;
  isWinner?: boolean;
  isLoser?: boolean;
};

function Player({ color, address, balance, isActive, isWinner, isLoser }: Props) {
  const className = clsx(styles.player, styles[color], isActive && styles.active, isLoser && styles.disabled);
  const totalClassName = clsx(styles.total, isWinner && styles.success, isLoser && styles.error);

  return (
    <div className={className}>
      <Identicon value={address} size={34} theme="polkadot" className={styles.icon} />
      <div className={styles.summary}>
        <p className={styles.address}>{stringShorten(getVaraAddress(address), 5)}</p>
        <p className={styles.balance}>
          {balance} <span className={styles.balanceValue}>MNPL</span>
        </p>
        {(isWinner || isLoser) && (
          <div className={totalClassName}>
            {isWinner && 'Winner'}
            {/* {isWinner ? 'Winner' : !isLoser && `${total >= 0 ? '+' : ''} ${total}`} */}
            {isLoser && 'Bankrupt'}
          </div>
        )}
      </div>
    </div>
  );
}

export { Player };

import { getVaraAddress } from '@gear-js/react-hooks';
import clsx from 'clsx';

import { Buttons } from '../buttons';

import styles from './Roll.module.scss';

type Props = {
  color: string | undefined;
  player: string;
  currentTurn: number;
  turnsAmount: number;
  onFirstClick?: () => void;
  onPrevClick?: () => void;
  onMainClick?: () => void;
  onNextClick?: () => void;
  onLastClick?: () => void;
};

function Roll({ color, player, currentTurn, turnsAmount, onFirstClick, onPrevClick, onNextClick, onLastClick }: Props) {
  return (
    <>
      <p className={clsx(styles.turnPlayer, color && styles[color])}>
        <span className={styles.player}>{getVaraAddress(player)}</span> Turn
      </p>
      <div className={styles.disk}>
        <h2 className={styles.heading}>Master Rolls</h2>

        <div className={styles.roll}>{currentTurn}</div>

        <Buttons
          onFirstClick={onFirstClick}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
          onLastClick={onLastClick}
        />
      </div>
      <div className={styles.turnCounter}>
        Turn <span>{currentTurn}</span> of {turnsAmount}
      </div>
    </>
  );
}

export { Roll };

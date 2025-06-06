import clsx from 'clsx';

import CoinSVG from '@/assets/images/icons/coin.svg?react';
import StarSVG from '@/assets/images/icons/star.svg?react';

import styles from './Balance.module.scss';

type Props = BaseComponentProps & {
  SVG: SVGComponent;
  value: string;
  unit?: string;
};

type HOCProps = Omit<Props, 'SVG' | 'children'>;

function Balance({ SVG, value, unit, className }: Props) {
  return (
    <span className={clsx(styles.wrapper, className)}>
      <SVG />
      <span className={styles.balance}>
        <b className={styles.amount}>{value}</b>
        {unit && <span className={styles.unit}>{unit}</span>}
      </span>
    </span>
  );
}

function VaraBalance({ value, unit, className }: HOCProps) {
  return <Balance SVG={CoinSVG} value={value} unit={unit} className={className} />;
}

function PointsBalance({ value, unit = 'PPV', className }: HOCProps) {
  return <Balance SVG={StarSVG} value={value} unit={unit} className={className} />;
}

export { VaraBalance, PointsBalance };

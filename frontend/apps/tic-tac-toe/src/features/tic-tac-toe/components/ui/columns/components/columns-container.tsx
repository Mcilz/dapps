import clsx from 'clsx';

import { BaseComponentProps } from '@/app/types';

import styles from '../columns.module.scss';

export function ColumnsContainer({ children, className }: BaseComponentProps) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}

import { buttonStyles } from '@gear-js/ui';
import clsx from 'clsx';

import { Icon } from '@/components/ui/icon';

export const GetGasBalance = () => {
  return (
    <div className="">
      <button className={clsx('btn group !p-2.5', buttonStyles.lightGreen)}>
        <Icon name="test-balance" width={20} height={20} />
      </button>
    </div>
  );
};

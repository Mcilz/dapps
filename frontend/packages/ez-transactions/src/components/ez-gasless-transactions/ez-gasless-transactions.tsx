import { GaslessTransactions } from '@ez/features/gasless-transactions';

import { useEzTransactions } from '../../context';

type Props = {
  disabled?: boolean;
};

function EzGaslessTransactions({ disabled }: Props) {
  const { signless } = useEzTransactions();

  return <GaslessTransactions disabled={signless.isSessionActive || disabled} />;
}

export { EzGaslessTransactions };

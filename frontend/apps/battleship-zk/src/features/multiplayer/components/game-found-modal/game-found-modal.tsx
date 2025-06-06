import { useApi } from '@gear-js/react-hooks';
import { Button } from '@gear-js/vara-ui';
import { isNotEmpty, useForm } from '@mantine/form';
import { EzTransactionsSwitch } from 'gear-ez-transactions';

import { SIGNLESS_ALLOWED_ACTIONS } from '@/app/consts';
import TVaraSVG from '@/assets/images/icons/tvara-coin.svg?react';
import VaraSVG from '@/assets/images/icons/vara-coin.svg?react';
import { GameDetails } from '@/components/layout/game-details';
import { TextField } from '@/components/layout/text-field';
import { Modal } from '@/components/ui/modal';
import { usePending } from '@/features/game/hooks';

import styles from './GameFoundModal.module.scss';

type Props = {
  entryFee: number | string;
  onSubmit: (values: JoinModalFormValues) => Promise<void>;
  onClose: () => void;
};

export type JoinModalFormValues = {
  name: string;
};

function GameFoundModal({ entryFee, onSubmit, onClose }: Props) {
  const { api } = useApi();
  const { pending } = usePending();

  const VaraSvg = api?.registry.chainTokens[0].toLowerCase() === 'vara' ? <VaraSVG /> : <TVaraSVG />;
  const items = [
    {
      name: 'Entry fee',
      value: (
        <>
          {VaraSvg} {entryFee} VARA
        </>
      ),
      key: '1',
    },
  ];

  const joinForm = useForm({
    initialValues: {
      name: '',
    },
    validate: {
      name: isNotEmpty(`Name shouldn't be empty`),
    },
  });

  const { errors: joinErrors, getInputProps: getJoinInputProps, onSubmit: onJoinSubmit } = joinForm;

  const handleJoinSession = async (values: JoinModalFormValues) => {
    await onSubmit(values);
  };

  return (
    <Modal
      heading="The game has been found"
      className={{ wrapper: styles.modalWrapper, modal: styles.modal }}
      onClose={onClose}
      showModalMode={false}>
      <div className={styles.container}>
        <p className={styles.mainText}>
          To proceed, review the parameters of the gaming session and click the “Join” button. If applicable, you will
          need to pay the entry fee and required amount of gas immediately after clicking the “Join” button. After the
          end of the game, any unused gas will be refunded.
        </p>
        <GameDetails items={items} />
        <EzTransactionsSwitch allowedActions={SIGNLESS_ALLOWED_ACTIONS} />
        <form className={styles.form} onSubmit={onJoinSubmit(handleJoinSession)}>
          <div className={styles.input}>
            <TextField
              theme="dark"
              label="Enter your name:"
              placeholder="Username"
              variant="active"
              maxLength={20}
              {...getJoinInputProps('name')}
            />
            <span className={styles.fieldError}>{joinErrors.name}</span>
          </div>
          <div className={styles.inputs}>
            <Button type="submit" text="Join" disabled={pending} className={styles.button} />
            <Button text="Cancel" color="grey" disabled={pending} className={styles.button} onClick={onClose} />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export { GameFoundModal };

import { motion } from 'framer-motion';
import { MouseEvent, useEffect, useRef } from 'react';

import type { BaseComponentProps } from '@/app/types';
import { Button } from '@/components/ui/Button';
import { variantsOverlay, variantsPanel } from '@/components/ui/modal/modal.variants';

import { Icon } from '../icon';

import styles from './Modal.module.scss';

type Props = BaseComponentProps & {
  heading: string;
  onClose: () => void;
};

export function Modal({ heading, children, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  const disableScroll = () => document.body.classList.add('modal-open');
  const enableScroll = () => document.body.classList.remove('modal-open');

  const open = () => {
    ref.current?.showModal();
    disableScroll();
  };

  const close = () => {
    ref.current?.close();
    enableScroll();
  };

  useEffect(() => {
    open();

    return () => close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = ({ target }: MouseEvent) => {
    const isBackdropClick = target === ref.current;

    if (isBackdropClick) onClose();
  };

  return (
    <motion.dialog
      initial="enter"
      animate="center"
      exit="exit"
      variants={variantsOverlay}
      ref={ref}
      onClick={handleClick}
      className={styles.modal}>
      <motion.div initial="enter" animate="center" exit="exit" variants={variantsPanel} className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>{heading}</h2>

          <Button variant="text" onClick={onClose} className={styles['modal-close']}>
            <Icon name="close" width={25} height={24} />
          </Button>
        </div>

        {children}
      </motion.div>
    </motion.dialog>
  );
}

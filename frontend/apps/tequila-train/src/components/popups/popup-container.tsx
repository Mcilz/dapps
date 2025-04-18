import { Dialog, DialogPanel } from '@headlessui/react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

import { BaseComponentProps } from '@/app/types';

type PopupContainerProps = BaseComponentProps & {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  overlayCn?: string;
};

export function PopupContainer({ children, isOpen, setIsOpen, overlayCn }: PopupContainerProps) {
  return (
    <AnimatePresence>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        as="div"
        className="fixed inset-0 z-40 flex items-center justify-center">
        <div className={clsx('fixed inset-0 transition-colors', overlayCn ? overlayCn : 'bg-black/60 backdrop-blur')} />

        <DialogPanel className="flex flex-col">
          <motion.div
            className="flex items-center justify-center min-h-screen p-4"
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: 'easeOut',
                duration: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: 'easeIn',
                duration: 0.15,
              },
            }}>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            {children}
          </motion.div>
        </DialogPanel>
      </Dialog>
    </AnimatePresence>
  );
}

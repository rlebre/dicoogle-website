import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import ModalEvent from '../../interfaces/ModalEvent';
import { useOutsideClick } from '../click-outside/useClickOutside';
import Exclamation from '../icons/Exclamation';
import Success from '../icons/Success';
import { ModalTypes } from './config';
import styles from './modal.module.scss';
import { ModalService } from './service';

export const Modal = () => {
  const [visible, setVisibility] = useState<boolean>(false);

  const type = useRef<ModalTypes>();
  const description = useRef<string>('');
  const title = useRef<string>('');

  const menuRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  useOutsideClick(menuRef, () => {
    hide();
  });

  const show = useCallback(() => {
    setVisibility(true);
  }, []);

  const hide = useCallback(() => {
    setVisibility(false);
  }, []);

  useEffect(() => {
    const onError = (event: CustomEvent<ModalEvent>) => {
      const { title: eventTitle, description: eventDescription } = event.detail;
      description.current = eventDescription;
      title.current = eventTitle;
      type.current = ModalTypes.ERROR;
      visible && setVisibility(false);
      show();
    };

    const onSuccess = (event: CustomEvent) => {
      const { title: eventTitle, description: eventDescription } = event.detail;
      description.current = eventDescription;
      title.current = eventTitle;
      type.current = ModalTypes.SUCCESS;
      visible && setVisibility(false);
      show();
    };

    ModalService.on(ModalTypes.SUCCESS, onSuccess);
    ModalService.on(ModalTypes.ERROR, onError);

    return () => {
      ModalService.off(ModalTypes.SUCCESS, onSuccess);
      ModalService.off(ModalTypes.ERROR, onError);
    };
  }, [show, visible]);

  return (
    <div
      onKeyDown={(e) => e.key === 'Escape' && setVisibility(false)}
      className={`${styles.modal} ${visible ? styles.modal__show : ''}`}
    >
      <div ref={menuRef} className={styles.modal__container}>
        <div className={styles.modal__icon}>{type.current && <TypeRenderer type={type.current} />}</div>

        <div className={styles.modal__content}>
          {title.current && <span className={styles.modal__title}>{title.current}</span>}
          {description.current && <span className={styles.modal__description}>{description.current}</span>}
        </div>

        <span
          role='button'
          tabIndex={0}
          className={styles.button}
          onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => e.key === 'Enter' && setVisibility(false)}
          onClick={hide}
        >
          OK
        </span>
      </div>
    </div>
  );
};

const TypeRenderer = ({ type }: { type: ModalTypes }) => {
  switch (type) {
    case ModalTypes.SUCCESS:
      return <Success className='h-10 w-10 fill-green-700' />;
    case ModalTypes.ERROR:
      return <Exclamation fill='red' className='h-10 w-10 fill-red-600' />;
  }
};

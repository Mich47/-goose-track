import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  CloseBtn,
  ModalContainer,
  Overlay,
  SmallModalContainer,
} from './Modal.styled';
import Icons from '../../images/sprite.svg';

export const Modal = ({ children, onClose, isCloseBtn = true, editRef }) => {
  const memoKeyClose = useCallback(handleKeyClose, [handleKeyClose]);

  useEffect(() => {
    window.addEventListener('keydown', memoKeyClose);

    return () => {
      window.removeEventListener('keydown', memoKeyClose);
    };
  }, [memoKeyClose]);

  function handleKeyClose(evt) {
    if (evt.code === 'Escape') {
      onClose();
    }
  }

  function handleClose(evt) {
    const { target, currentTarget } = evt;

    if (target === currentTarget) {
      onClose();
    }
  }

  function handleCloseBtn() {
    onClose();
  }

  return (
    <Overlay onClick={handleClose}>
      {isCloseBtn ? (
        <ModalContainer>
          <CloseBtn onClick={handleCloseBtn}>
            <use xlinkHref={`${Icons}#calendar-close-sf`} />
          </CloseBtn>
          {children}
        </ModalContainer>
      ) : (
        <SmallModalContainer left={editRef.left} top={editRef.top}>
          {children}
        </SmallModalContainer>
      )}
    </Overlay>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  isCloseBtn: PropTypes.bool,
  editRef: PropTypes.shape({
    left: PropTypes.string,
    top: PropTypes.string,
  }),
};

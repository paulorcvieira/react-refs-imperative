import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';

export interface ModalHandles {
  openModal: () => void;
}

const Modal: React.RefForwardingComponent<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(false);

  const openModal = useCallback(() => {
    setVisible(true);
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal,
    }
  });

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, [])

  if (!visible) {
    return null;
  }

  return (
    <div>
      Modal aberto

      <button onClick={handleCloseModal}>Fechar modal</button>
    </div>
  );
}

export default forwardRef(Modal);
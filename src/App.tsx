import React, { useRef, useCallback, FormEvent } from 'react';

import Input from './components/Input';
import Modal, { ModalHandles } from './components/Modal';

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef<ModalHandles>(null);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      console.log(nameInputRef.current?.value);
      console.log(acceptTermsRef.current.value);

      // nameInputRef.current?.focus();
    }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input
          ref={nameInputRef}
          name="name"
          label="Digite seu nome"
          placeholder="Digite seu nome"
        />

        <button type="button" onClick={handleAcceptTerms}>Aceitar termos</button>
        <button type="submit">Enviar</button>
      </form>

      <button onClick={handleOpenModal}>Abrir modal</button>

      <Modal ref={modalRef} />
    </div>
  );
}

export default App;

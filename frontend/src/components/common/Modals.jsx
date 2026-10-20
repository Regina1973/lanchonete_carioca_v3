import { useState } from "react";

import Modal from
  "../../components/common/Modals";

export default function HomePage() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
      >
        Abrir Modal
      </button>

      <Modal
        isOpen={open}
        title="Teste"
        onClose={() => setOpen(false)}
      >
        <p>Conteúdo do modal.</p>
      </Modal>
    </>
  );
}
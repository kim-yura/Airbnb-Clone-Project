import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";
import DemoLogin from "../DemoLogin";

function SignupFormModal() {
  const [showModal, setShowModal] =useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
          <DemoLogin />
        </Modal>
      )}
    </>
  )
}

export default SignupFormModal;

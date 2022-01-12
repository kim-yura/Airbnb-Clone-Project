import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { ConfirmDelete } from "../SpotDeleteConfirmationModal/ConfirmDelete";

function SpotDeleteConfirmationModal() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ConfirmDelete />
                </Modal>
            )}
        </>
    );
}

export default SpotDeleteConfirmationModal;

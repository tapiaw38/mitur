import React, { useState } from 'react';

export const useModal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return {
        showModal,
        setShowModal,
        handleCloseModal
    };
};

import React from 'react';
import { useState } from 'react';

const useModalData = () => {
    const [modalShow, setModalShow] = useState(false);
    const [signUp, setSignUp] = useState(false);

    return {
        modalShow,
        setModalShow,
        signUp,
        setSignUp
    }
};

export default useModalData;
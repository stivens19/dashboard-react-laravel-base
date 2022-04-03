import React from "react";
import ReactDOM  from "react-dom";
import { ModalBackground } from "./styles";
const Modal = ({children}) => {
    return ReactDOM.createPortal(
        <ModalBackground>
            {children}
        </ModalBackground>
        ,
        document.getElementById("modal-root")
    );
};

export default Modal;

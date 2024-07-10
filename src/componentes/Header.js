import React, {useState} from "react";
import Modal from "./Modal"
import "./Header.css"

function Header(){
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return <header className="header">
        <div className="imagen_header">
        <img className="logo_af" src="/img/logo.png"/> 
        </div>
        <div className="botones_header">
            <button className="btn_home">HOME</button>
            <button className="btn_vn" onClick={openModal}>NUEVO VIDEO</button>
            </div>

            {/* Modal */}
            <Modal isOpen={modalOpen} onClose={closeModal} />

            </header>
}

export default Header
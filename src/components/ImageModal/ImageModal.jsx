import Modal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";
Modal.setAppElement("#root");

export default function ImageModal({ modalIsOpen, modalClose, currentImage }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={modalClose}
        overlayClassName={css.overlay}
        className={css.modal}
      >
        <img className={css.img} src={currentImage} />
      </Modal>
    </div>
  );
}

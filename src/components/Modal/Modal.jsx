import RegisterForm from "../RegisterForm/RegisterForm";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-content">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;

import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./ResetConfirmModal.scss";

interface IResetConfirmModalProps {
  open: boolean;
  onModalCancelClick: any;
  onModalConfirmClick: any;
}

const ResetConfirmModal: React.FC<IResetConfirmModalProps> = ({ open, onModalCancelClick, onModalConfirmClick }) => (
  <Popup open={open} position="center center" closeOnDocumentClick={false} modal className="resetConfirmModal">
    <h2>Сброс кода</h2>
    <p>Вы уверены, что хотите сбросить код? Введенные данные будут потеряны</p>
    <div className="resetConfirmModal__buttonCont">
      <button className="resetConfirmModal__confirmBtn" type="button" onClick={onModalConfirmClick}>
        Подтвердить
      </button>
      <button className="resetConfirmModal__cancelBtn" type="button" onClick={onModalCancelClick}>
        Отмена
      </button>
    </div>
  </Popup>
);

export default ResetConfirmModal;

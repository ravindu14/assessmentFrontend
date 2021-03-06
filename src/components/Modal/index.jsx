// @flow
import React, { PureComponent } from "react";
import classNames from "classnames";

import "./styles.scss";

type ModalProps = {
  isTransparent: boolean,
  className: string,
  showModal: boolean,
  children: any,
  onClose: Function,
};

type ModalState = {
  showModal: boolean,
};

class Modal extends PureComponent<ModalProps, ModalState> {
  static defaultProps = {
    isFullScreen: false,
    showModal: false,
  };

  state = {
    showModal: false,
  };

  toggleModal = (showModal: boolean) => {
    this.setState(function() {
      return {
        showModal,
      };
    });
  };

  componentDidUpdate(prevProps: ModalProps) {
    if (prevProps.showModal !== this.props.showModal)
      this.toggleModal(this.props.showModal);
  }

  render() {
    const {
      isTransparent,
      children,
      className,
      showModal,
      onClose,
    } = this.props;
    return (
      <div
        className={classNames(
          "modal",
          className,
          {
            "modal-transparent": isTransparent,
          },
          { "show-modal": showModal }
        )}
      >
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="modal-content">{children}</div>
      </div>
    );
  }
}

export default Modal;

import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

class SelectedBeast extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.showModal}
          onHide={this.props.closeModal}
          animation={false}
          className="modal"
        >
          <Modal.Header closeButton onClick = {this.props.handleExitModal}>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
          <Image
            src={this.props.selectedBeast.image_url}
            alt={this.props.selectedBeast.title}
            title={this.props.selectedBeast.title}
            className="modalImage"
          />
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;

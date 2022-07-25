import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class SelectedBeast extends Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.closeModal}
          animation={false}
        >
          <Modal.Header closeButton onClick = {this.props.handleExitModal}>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Image
            src={this.props.selectedBeast.image_url}
            alt={this.props.selectedBeast.title}
            title={this.props.selectedBeast.title}
          />
          <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;

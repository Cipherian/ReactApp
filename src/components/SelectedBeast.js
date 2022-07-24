import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class SelectedBeast extends Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.closeModal}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Image
            src={this.props.image_url}
            alt={this.props.title}
            title={this.props.title}
          />
          <Modal.Body>{this.props.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={this.props.closeModal}></Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;

import React from "react";
import { Modal, Button } from "react-bootstrap";

import "../../../styles/ModelFields/ModelFields.css";

const ModelFields = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="p-4 model__field"
    >
      <Modal.Header closeButton className="border-bottom-0 pt-4">
        <Modal.Title
          className="model__field__title main__red text-capitalize font-weight-bold"
          id="contained-modal-title-vcenter"
        >
          Add {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer className="border-top-0">
        <Button
          className="model__field__btn btn-block"
          variant=""
          onClick={props.submitHandler}
          disabled={props.submitValid === "Select Engine"}
        >
          Add {props.title}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelFields;

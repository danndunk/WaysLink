import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { API } from "../../src/config/API";

function ModalDeleteList(props) {
  const navigate = useNavigate();
  const handleClose = () => props.setShow(false);

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      const response = await API.delete("/link/" + props.id);
      console.log(response);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      show={props.show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>Are you sure want to delete this link</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDelete}>
          Yes
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeleteList;

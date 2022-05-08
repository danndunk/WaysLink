import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../src/context/userContext";

import { Modal, Button } from "react-bootstrap";

import { API } from "../../src/config/API";

function ModalDelete(props) {
  const navigate = useNavigate();
  const handleClose = () => props.setShow(false);
  const [state, dispatch] = useContext(UserContext);

  const { id } = state.user;

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      const response = await API.delete("/user/" + id);
      console.log(response);
      dispatch({
        type: "LOGOUT",
      });
      navigate("/");
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
      <Modal.Body>Are you sure want to delete your account</Modal.Body>
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

export default ModalDelete;

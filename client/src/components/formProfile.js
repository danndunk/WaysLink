import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/userContext";

import ModalDelete from "./modalDelete";

import { Form, Button, Alert } from "react-bootstrap";

import { API } from "../../src/config/API";

function FormProfile() {
  const [state, _] = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    fullname: "",
  });
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);

  const { id } = state.user;

  const getUser = async () => {
    try {
      const response = await API.get("/user");
      setForm({
        email: response.data.data.email,
        fullname: response.data.data.fullname,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(form);
  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.patch("/user/" + id, form, config);

      console.log(response.data);

      if (response.data.status === "success") {
        const alert = <Alert variant="success">Success Update Profile</Alert>;
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            {response.data.message}
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = (e) => {
    setShow(true);
  };

  return (
    <div style={styles.containerForm}>
      <Form onSubmit={handleOnSubmit}>
        {message}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={styles.label}>Name</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            value={form?.email}
            type="email"
            name="email"
            placeholder="Your Name"
            style={styles.input}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={styles.label}>Email</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            value={form?.fullname}
            type="text"
            name="fullname"
            placeholder="Your Email"
            style={styles.input}
          />
          <div style={styles.containerBtn}>
            <Button
              type="submit"
              style={{
                ...styles.btn,
                backgroundColor: "#FF9F00",
                marginRight: "30px",
              }}
            >
              Save Account
            </Button>
            <Button
              onClick={handleModal}
              style={{
                ...styles.btn,
                backgroundColor: "#FF0000",
              }}
            >
              Delete Account
            </Button>
          </div>
        </Form.Group>
      </Form>
      {<ModalDelete setShow={setShow} show={show} />}
    </div>
  );
}

const styles = {
  containerForm: {
    backgroundColor: "white",
    marginTop: "40px",
    borderRadius: "10px",
    padding: "20px 0px",
  },
  label: {
    marginBottom: "15px",
    color: "#7E7A7A",
  },
  input: {
    border: "none",
    borderBottom: "2px solid #7E7A7A",
    fontWeight: "bold",
    boxShadow: "none",
  },
  containerBtn: {
    marginTop: "70px",
    float: "right",
    marginRight: "30px",
  },
  btn: {
    borderRadius: "10px",
    border: "none",
    padding: "8px 20px",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default FormProfile;

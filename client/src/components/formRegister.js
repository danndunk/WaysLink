import { useState } from "react";

import { Form, Modal, Button, Alert } from "react-bootstrap";
import cssModules from "./sign.module.css";

import { API } from "../../src/config/API";

function FormRegister(props) {
  const switchToLogin = (e) => {
    e.preventDefault();
    props.setIsRegister(true);
  };

  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const { email, password, fullname } = form;

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const body = JSON.stringify(form);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.post("/register", body, config);
      console.log(response);

      if (response.data.status === "success") {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
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
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };
  return (
    <Modal {...props} centered aria-labelledby="contained-modal-title-vcenter">
      <Form>
        <p className={cssModules.title}>Register</p>
        {message}
        <Form.Control
          onChange={handleOnChange}
          value={email}
          className={cssModules.input}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          style={{ backgroundColor: "rgba(210, 210, 210, 0.25)" }}
        />
        <Form.Control
          onChange={handleOnChange}
          value={password}
          className={cssModules.input}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          style={{ backgroundColor: "rgba(210, 210, 210, 0.25)" }}
        />
        <Form.Control
          onChange={handleOnChange}
          value={fullname}
          className={cssModules.input}
          id="fullname"
          name="fullname"
          type="text"
          placeholder="Full Name"
          style={{ backgroundColor: "rgba(210, 210, 210, 0.25)" }}
        />
        <Button
          onClick={handleOnSubmit}
          className={cssModules.btnSign}
          style={{
            backgroundColor: "#FF9F00",
            border: "none",
            borderRadius: "10px",
          }}
          type="submit"
        >
          Register
        </Button>
        <p
          className={cssModules.link}
          style={{ cursor: "pointer" }}
          onClick={switchToLogin}
        >
          Already have an account ? Klik <strong>Here</strong>
        </p>
      </Form>
    </Modal>
  );
}

export default FormRegister;

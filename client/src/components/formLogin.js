import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

import { Form, Modal, Button, Alert } from "react-bootstrap";
import cssModules from "./sign.module.css";

import { API } from "../../src/config/API";

function FormLogin(props) {
  const navigate = useNavigate();

  const switchToRegister = (e) => {
    e.preventDefault();
    props.setIsRegister(false);
  };

  const [_, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handeOnChange = (e) => {
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

      const body = JSON.stringify(form);

      const response = await API.post("/login", body, config);
      console.log(response.data);

      if (response?.data.status === "success") {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        navigate("/home");
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
  return (
    <Modal {...props} centered aria-labelledby="contained-modal-title-vcenter">
      <Form>
        <p className={cssModules.title}>Login</p>
        {message}
        <Form.Control
          onChange={handeOnChange}
          value={email}
          className={cssModules.input}
          style={{ backgroundColor: "rgba(210, 210, 210, 0.25)" }}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <Form.Control
          onChange={handeOnChange}
          value={password}
          className={cssModules.input}
          style={{ backgroundColor: "rgba(210, 210, 210, 0.25)" }}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button
          className={cssModules.btnSign}
          style={{
            backgroundColor: "#FF9F00",
            border: "none",
            borderRadius: "10px",
          }}
          type="submit"
          onClick={handleOnSubmit}
        >
          Login
        </Button>
        <p
          className={cssModules.link}
          style={{ cursor: "pointer" }}
          onClick={switchToRegister}
        >
          Don't have an account ? Klik <strong>Here</strong>
        </p>
      </Form>
    </Modal>
  );
}

export default FormLogin;

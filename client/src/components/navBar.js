import { Navbar, Container, Nav, Button } from "react-bootstrap";

import Logo from "../assets/Frame.png";

const styles = {
  container: {
    height: "10vh",
    margin: "auto 50px",
  },
  btnLogin: {
    backgroundColor: "transparent",
    color: "black",
    border: "none",
    fontWeight: "500",
  },
  btnLogout: {
    backgroundColor: "#FF9F00",
    color: "white",
    border: "none",
    fontWeight: "500",
    borderRadius: "10px",
    padding: "5px 15px",
  },
};

function NavBar(props) {
  const displayFormLogin = (e) => {
    e.preventDefault();
    props.setIsRegister(true);
    props.setModalShow(true);
  };

  const displayFormRegister = (e) => {
    e.preventDefault();
    props.setIsRegister(false);
    props.setModalShow(true);
  };

  return (
    <Navbar style={styles.container}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar className="justify-content-end">
          <Nav.Link href="#link">
            <Button style={styles.btnLogin} onClick={displayFormLogin}>
              Login
            </Button>
          </Nav.Link>
          <Nav.Link href="#link">
            <Button style={styles.btnLogout} onClick={displayFormRegister}>
              Register
            </Button>
          </Nav.Link>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavBar;

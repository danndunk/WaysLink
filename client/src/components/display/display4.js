import { Nav } from "react-bootstrap";
import Profile from "../../assets/unnamed.jpg";

import { Button } from "react-bootstrap";

function Display4() {
  return (
    <div style={styles.container}>
      <div style={styles.containerContent}>
        <img src={Profile} alt="Profile" style={styles.profile} />
        <p style={styles.title}>A Nice Day</p>
        <p style={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <Nav className="flex-column">
          <Nav.Link
            href="/home"
            style={styles.order}
            className="d-flex justify-content-between"
          >
            <div>
              <i className="bi bi-facebook" />
              Lazada
            </div>
            <Button>Buy</Button>
          </Nav.Link>
          <Nav.Link
            href="/home"
            style={styles.order}
            className="d-flex justify-content-between"
          >
            <div>
              <i className="bi bi-facebook" />
              Lazada
            </div>
            <Button>Order</Button>
          </Nav.Link>
        </Nav>

        <Nav className="flex-row">
          <Nav.Link href="/home" style={styles.link}>
            <i className="bi bi-facebook" />
          </Nav.Link>
          <Nav.Link href="/home" style={styles.link}>
            <i className="bi bi-instagram" />
          </Nav.Link>
          <Nav.Link href="/home" style={styles.link}>
            <i className="bi bi-twitter" />
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage: `url(${Profile})`,
    padding: "20px",
  },
  containerContent: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "white",
  },
  profile: {
    width: "100%",
    height: "300px",
    marginBottom: "10px",
  },
  title: {
    fontWeight: "500",
    fontSize: "24px",
    marginBottom: "3px",
  },
  description: {
    color: "black",
  },
  order: {},
  link: {
    padding: "5px",
    backgroundColor: "white",
    color: "black",
    margin: "0px 5px",
    borderRadius: "50%",
    border: "3px solid black",
  },
};

export default Display4;

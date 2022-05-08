import { Nav } from "react-bootstrap";
import Profile from "../../assets/unnamed.jpg";

const backgroundImage = null;

function Display3(props) {
  backgroundImage = props?.data.profile;
  return (
    <div style={styles.container}>
      <div style={styles.containerContent}>
        <img src={props?.data.profile} alt="Profile" style={styles.profile} />
        <p style={styles.title}>{props?.data.title}</p>
        <p style={styles.description}>{props?.data.description}</p>

        <Nav className="flex-row mb-4 mt-4 justify-content-center">
          <Nav.Link href="/home" style={styles.link}>
            <i className="bi bi-envelope-fill" />
          </Nav.Link>
          <Nav.Link href="/home" style={styles.link}>
            <i className="bi bi-telephone-fill" />
          </Nav.Link>
          <Nav.Link href="/home" style={styles.link}>
            <i className="bi bi-link" />
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    padding: "20px",
  },
  containerContent: {
    width: "50%",
    margin: "auto",
    padding: "15px",
    backgroundColor: "white",
    textAlign: "center",
  },
  profile: {
    width: "100%",
    height: "400px",
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
  link: {
    padding: "5px",
    backgroundColor: "white",
    color: "black",
    margin: "0px 10px",
    borderRadius: "50%",
    border: "3px solid black",
  },
};

export default Display3;

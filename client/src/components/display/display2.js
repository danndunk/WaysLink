import { Nav } from "react-bootstrap";
import Profile from "../../assets/unnamed.jpg";

function Display2(props) {
  console.log(props.data.links);
  return (
    <div style={styles.container}>
      <div style={styles.containerContent}>
        <img src={props?.data.profile} alt="Profile" style={styles.profile} />
        <p style={styles.title}>{props?.data.title}</p>
        <p style={styles.description}>{props?.data.description}</p>
        <Nav className="flex-column">
          {props?.data.links.map((item, index) => (
            <Nav.Link href={item.url} style={styles.link} key={index}>
              {item.titleLink}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px 10px",
    backgroundColor: "#8CB2BD",
    height: "100vh",
  },
  containerContent: {
    width: "50%",
    margin: "auto",
    backgroundColor: "#C8D5CF",
    borderRadius: "10px",
    padding: "15px",
  },
  profile: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
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
    backgroundColor: "white",
    color: "black",
    marginBottom: "10px",
    borderRadius: "30px",
    border: "1px solid #82ABB7",
  },
};

export default Display2;

import { Nav } from "react-bootstrap";

function Display1(props) {
  console.log(props.data);

  return (
    <div style={styles.container}>
      <img src={props?.data.profile} alt="Profile" style={styles.profile} />
      <p style={styles.title}>{props?.data.title}</p>
      <p style={styles.description}>{props?.data.description}</p>
      <Nav className="flex-column">
        {props?.data.links.map((item, index) => (
          <a target="_blank" href={item.url} style={styles.link} key={index}>
            {item.titleLink}
          </a>
        ))}
      </Nav>
    </div>
  );
}

const styles = {
  container: {
    margin: "auto",
    width: "50%",
    textAlign: "center",
    padding: "30px 10px",
  },
  profile: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "20px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  description: {
    color: "black",
  },
  link: {
    backgroundColor: "black",
    textDecoration: "none",
    color: "white",
    marginBottom: "20px",
    padding: "10px",
  },
  logo: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    float: "left",
  },
};

export default Display1;

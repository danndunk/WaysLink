import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { Nav } from "react-bootstrap";
import Logo from "../assets/Frame.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SideBar(props) {
  const navigate = useNavigate();

  const [_, dispatch] = useContext(UserContext);

  const handleLogout = (e) => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  return (
    <Nav className="flex-column" style={styles.container}>
      <div style={styles.containerNav}>
        <Nav.Link as={Link} to="/home" style={styles.containerLogo}>
          <img src={Logo} alt="Logo" />
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/home"
          style={
            props?.title === "Template"
              ? { ...styles.nav, color: "#FF9F00" }
              : styles.nav
          }
        >
          <i className="bi bi-eye" style={styles.iconNav} />
          Template
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/profile"
          style={
            props?.title === "Profile"
              ? { ...styles.nav, color: "#FF9F00" }
              : styles.nav
          }
        >
          <i className="bi bi-person" style={styles.iconNav} />
          Profile
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/my-link"
          style={
            props?.title === "MyLink"
              ? { ...styles.nav, color: "#FF9F00" }
              : styles.nav
          }
        >
          <i className="bi bi-link" style={styles.iconNav} />
          My Link
        </Nav.Link>
        <Nav.Link
          style={{
            ...styles.nav,
            bottom: "-20px",
            position: "absolute",
          }}
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-left" style={styles.iconNav} />
          Logout
        </Nav.Link>
      </div>
    </Nav>
  );
}

const styles = {
  container: {
    width: "20%",
    height: "100vh",
  },
  containerNav: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  containerLogo: {
    marginBottom: "70px",
    textAlign: "center",
    marginTop: "15px",
  },
  nav: {
    marginBottom: "40px",
    fontSize: "24px",
    fontWeight: "500",
    color: "black",
  },
  iconNav: {
    marginRight: "18px",
  },
};

export default SideBar;

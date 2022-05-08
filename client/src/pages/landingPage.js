import NavBar from "../components/navBar";
import { Button } from "react-bootstrap";

import FormLogin from "../components/formLogin";
import FormRegister from "../components/formRegister";

import Hp from "../assets/hp.png";
import Pc from "../assets/pc.png";
import { useState } from "react";

const styles = {
  containerLanding: {
    backgroundColor: "#FF9F00",
    height: "90vh",
    display: "flex",
  },
  title: {
    color: "white",
    fontWeight: "800",
    fontSize: "56px",
  },
  containerLeft: {
    padding: "80px",
    width: "50%",
  },
  containerRight: {
    textAlign: "center",
    width: "50%",
    marginTop: "125px",
  },
  paragparh: {
    color: "white",
    fontSize: "22px",
    marginTop: "40px",
  },
  btnStart: {
    backgroundColor: "black",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "24px",
    border: "none",
    padding: "8px 20px",
    borderRadius: "10px",
    marginTop: "60px",
  },
  hp: {
    position: "absolute",
    marginTop: "100px",
    marginLeft: "-90px",
    width: "165px",
  },
  pc: {
    width: "450px",
  },
};

function LandingPage() {
  const [isRegister, setIsRegister] = useState();
  const [modalShow, setModalShow] = useState(false);

  const openFormRegister = (e) => {
    e.preventDefault();
    setIsRegister(false);
    setModalShow(true);
  };

  return (
    <div>
      <NavBar setIsRegister={setIsRegister} setModalShow={setModalShow} />
      <div style={styles.containerLanding}>
        <div style={styles.containerLeft}>
          <p style={styles.title}>The Only Link You’ll Ever Need</p>
          <p style={styles.paragparh}>
            Add a link for your Social Bio and optimize your social media
            traffic.
            <br />
            <br />
            safe, fast and easy to use
          </p>

          <Button style={styles.btnStart} onClick={openFormRegister}>
            Get Started For Free
          </Button>
        </div>
        <div style={styles.containerRight}>
          <img src={Hp} alt="Handphone" style={styles.hp} />
          <img src={Pc} alt="PC" style={styles.pc} />
        </div>
      </div>
      {isRegister ? (
        <FormLogin
          show={modalShow}
          onHide={() => setModalShow(false)}
          setIsRegister={setIsRegister}
        />
      ) : (
        <FormRegister
          show={modalShow}
          onHide={() => setModalShow(false)}
          setIsRegister={setIsRegister}
        />
      )}
    </div>
  );
}

export default LandingPage;

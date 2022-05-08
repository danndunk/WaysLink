import { Button } from "react-bootstrap";

import Display1 from "../../src/assets/display1.png";
import Display2 from "../../src/assets/display2.png";
import Display3 from "../../src/assets/display3.png";

function ChooseDisplay(props) {
  const handleDisplay1 = (e) => {
    e.preventDefault();
    props.setIsChoose(true);
    props.setChoose(1);
  };

  const handleDisplay2 = (e) => {
    e.preventDefault();
    props.setIsChoose(true);
    props.setChoose(2);
  };

  return (
    <div style={styles.container}>
      <Button style={styles.btn} onClick={handleDisplay1}>
        <img src={Display1} alt="Device" style={styles.image} />
      </Button>
      <Button style={styles.btn} onClick={handleDisplay2}>
        <img src={Display2} alt="Device" style={styles.image} />
      </Button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
  btn: {
    backgroundColor: "Transparent",
    border: "none",
    padding: "0px",
    margin: "30px 25px",
  },
  image: {
    width: "200px",
  },
};
export default ChooseDisplay;

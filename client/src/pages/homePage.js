import SideBar from "../components/sideBar";

import { useState } from "react";

import ChooseDisplay from "../components/chooseDisplay";
import CreateLink from "../components/createLink";

function HomePage() {
  const title = "Template";
  const [isChoose, setIsChoose] = useState(false);
  const [choose, setChoose] = useState(null);

  return (
    <div style={styles.container}>
      <SideBar title={title} />
      <div style={styles.containerContent}>
        <h3 style={styles.header}>Template</h3>
        <div style={styles.containerForm}>
          {isChoose ? (
            <CreateLink
              setIsChoose={setIsChoose}
              choose={choose}
              setChoose={setChoose}
            />
          ) : (
            <ChooseDisplay setIsChoose={setIsChoose} setChoose={setChoose} />
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  header: {
    marginTop: "5px",
  },
  containerContent: {
    width: "80%",
    marginTop: "15px",
  },
  containerForm: {
    height: "86vh",
    marginTop: "50px",
    backgroundColor: "#E5E5E5",
    paddingTop: "30px",
  },
};

export default HomePage;

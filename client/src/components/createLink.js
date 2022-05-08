import { Button } from "react-bootstrap";

import FormCreateLink from "./formCreateLink";

function CreateLink(props) {
  const { choose } = props;
  const handleToChooseDisplay = (e) => {
    e.preventDefault();
    props.setIsChoose(false);
    props.setChoose(null);
  };

  return (
    <div style={styles.container}>
      <div className="mb-3">
        <Button style={styles.containerBack} onClick={handleToChooseDisplay}>
          <i className="bi bi-arrow-left" style={styles.fontBack} />
        </Button>
      </div>
      <h3 className="ps-3">Create Link</h3>
      <div style={styles.formLink}>
        <FormCreateLink choose={choose} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "0px 120px 0 40px",
  },
  containerBack: {
    backgroundColor: "Transparent",
    border: "none",
    color: "black",
    boxShadow: "none",
  },
  fontBack: {
    fontSize: "28px",
  },
  formLink: {
    width: "100%",
    height: "60vh",
    marginTop: "20px",
  },
};

export default CreateLink;

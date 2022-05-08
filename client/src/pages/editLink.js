import SideBar from "../components/sideBar";

import FormEditLink from "../components/formEditLink";

function EditLink() {
  const title = "Template";

  return (
    <div style={styles.container}>
      <SideBar title={title} />
      <div style={styles.containerContent}>
        <h3 style={styles.header}>Template</h3>
        <div style={styles.containerForm}>
          <FormEditLink />
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

export default EditLink;

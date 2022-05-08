import SideBar from "../components/sideBar";
import FormProfile from "../components/formProfile";

function ProfilePage() {
  const title = "Profile";
  return (
    <div style={styles.container}>
      <SideBar title={title} />
      <div style={styles.containerContent}>
        <h3 style={styles.header}>My Account</h3>
        <div style={styles.content}>
          <h3>My Information</h3>
          <div style={styles.containerForm}>
            <FormProfile />
          </div>
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
  content: {
    height: "86vh",
    marginTop: "50px",
    backgroundColor: "#E5E5E5",
    padding: "30px",
  },
};

export default ProfilePage;

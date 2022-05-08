import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

import SideBar from "../components/sideBar";
import ListLink from "../components/listLink";

import { API } from "../config/API";

function MyLinkPage() {
  const title = "MyLink";

  const [length, setLengh] = useState(0);

  const [listData, setListData] = useState(null);

  const getLinks = async (e) => {
    try {
      const response = await API.get("/user-links");

      setListData(response.data.data.tb_links);

      setLengh(response.data.data.tb_links.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div style={styles.container}>
      <SideBar title={title} />
      <div style={styles.containerContent}>
        <h3 style={styles.header}>My Link</h3>
        <div style={styles.content}>
          <div style={styles.headerContent}>
            <h3>All Links</h3>
            <div style={styles.count}>{length}</div>
            <Form
              onSubmit={findLink}
              className="d-flex"
              style={styles.containerForm}
            >
              <Form.Control
                type="text"
                placeholder="&#xF52A; Find your link"
                style={styles.input}
              />
              <Button type="submit" style={styles.btn}>
                Seacrh
              </Button>
            </Form>
          </div>
          <ListLink listData={listData} find={find} />
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
  headerContent: {
    display: "flex",
    paddingRight: "10px",
    alignItems: "center",
    marginBottom: "50px",
  },
  count: {
    padding: "5px 13px",
    marginLeft: "40px",
    color: "white",
    borderRadius: "50%",
    backgroundColor: "#FF9F00",
  },
  containerForm: {
    width: "100%",
  },
  input: {
    border: "none",
    borderBottom: "2px solid #7E7A7A",
    width: "75%",
    marginLeft: "40px",
    backgroundColor: "#E5E5E5",
    boxShadow: "none",
  },
  btn: {
    backgroundColor: "#FF9F00",
    border: "none",
    padding: "8px 20px",
    marginLeft: "40px",
  },
};

export default MyLinkPage;

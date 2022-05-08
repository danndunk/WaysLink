import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalDeleteList from "./modalDeleteLink";

import { Button } from "react-bootstrap";

function ListLink(props) {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);

  const handleView = async (uniqueLink) => {
    navigate("/preview/" + uniqueLink);
  };

  const handleEdit = (uniqueLink) => {
    navigate("/edit-link/" + uniqueLink);
  };

  const handleDelete = (id) => {
    setId(id);
    setShow(true);
  };
  return (
    <div>
      {props.listData?.map((item) => (
        <div
          className="d-flex justify-content-between align-items-center"
          style={styles.container}
          key={item.id}
        >
          <div className="d-flex">
            <img src={item.profile} alt="logo" style={styles.image} />
            <div>
              <h3>{item.title}</h3>
              {/* <a>localhost:3000/{item.uniqueLink}</a> */}
            </div>
          </div>
          <div className="text-center">
            <p>{item.viewCount}</p>
            <p>Visited</p>
          </div>
          <div>
            <Button
              style={styles.btn}
              onClick={() => handleView(item.uniqueLink)}
            >
              <i className="bi bi-eye" style={styles.icon} />
            </Button>
            <Button style={styles.btn}>
              <i
                className="bi bi-pen"
                style={styles.icon}
                onClick={() => handleEdit(item.uniqueLink)}
              />
            </Button>
            <Button style={styles.btn}>
              <i
                className="bi bi-trash3"
                style={styles.icon}
                onClick={() => handleDelete(item.id)}
              />
            </Button>
          </div>
        </div>
      ))}
      {<ModalDeleteList setShow={setShow} show={show} id={id} />}
    </div>
  );
}

const styles = {
  container: {
    width: "90%",
    marginBottom: "30px",
  },
  image: {
    width: "100px",
    height: "60px",
    marginRight: "20px",
  },
  btn: {
    backgroundColor: "Transparent",
    color: "#7E7A7A",
    border: "1px solid #7E7A7A",
    boxShadow: "none",
    margin: "0px 10px",
  },
  icon: {
    fontSize: "20px",
  },
};

export default ListLink;

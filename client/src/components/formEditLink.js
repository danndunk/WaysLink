import { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { API } from "../config/API";
import { useNavigate, useParams } from "react-router-dom";

function FormEditLink() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    description: "",
    templateID: "",
    links: [],
  });

  const getLink = async (id) => {
    try {
      const response = await API.get("/link/" + id);
      console.log(response.data.data.profile);

      setForm({
        profile: response.data.data.profile,
        title: response.data.data.title,
        description: response.data.data.description,
        links: [...response.data.data.links],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLink(id);
  }, []);

  const [preview, setPreview] = useState(null);

  const [message, setMessage] = useState(null);

  const handleAddCard = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      links: [...form.links, { titleLink: "", url: "" }],
    });
  };

  const handleOnChange = (e, i) => {
    const newLinks = form.links;
    newLinks[i] = { ...newLinks[i], [e.target.name]: e.target.value };
    setForm({ links: newLinks });

    setForm({
      ...form,

      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };
  console.log(form);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("description", form.description);
      formData.set("links", JSON.stringify(form.links));
      formData.set("profile", form.profile[0], form.profile[0].name);

      const response = await API.patch("/link/" + id, formData, config);

      if (response.data.status === "success") {
        const alert = (
          <Alert
            variant="success"
            className="py-1 d-flex justify-content-center"
          >
            Success Edit Book
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert
            variant="danger"
            className="py-1 d-flex justify-content-center"
          >
            {response.data.message}
          </Alert>
        );
        setMessage(alert);
      }

      navigate("/my-link");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleOnSubmit} className="d-flex justify-content-between">
      <div style={styles.containerForm}>
        <div className="mb-5">
          <div className="d-flex mb-3">
            {preview && (
              <div className="d-flex justify-content-center">
                <img src={preview} style={styles.profile} alt="preview" />
              </div>
            )}
            <input type="file" name="profile" onChange={handleOnChange} />
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={form?.title}
              onChange={handleOnChange}
              name="title"
              type="text"
              placeholder="ex. Your Title"
              style={styles.inputBio}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={form?.description}
              onChange={handleOnChange}
              name="description"
              type="text"
              placeholder="ex. Description Here"
              style={styles.inputBio}
            />
          </Form.Group>
        </div>

        {form.links.map((item, index) => (
          <div className="d-flex mb-5" style={styles.containerCard} key={index}>
            <div style={styles.containerInputLink} className="ms-4">
              <Form.Group className="mb-4">
                <Form.Label>Title Link</Form.Label>
                <Form.Control
                  value={item.titleLink}
                  onChange={(e) => handleOnChange(e, index)}
                  name="titleLink"
                  type="text"
                  placeholder="ex. Your Title"
                  style={styles.inputLink}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control
                  value={item.url}
                  onChange={(e) => handleOnChange(e, index)}
                  name="url"
                  type="text"
                  placeholder="ex. Description Here"
                  style={styles.inputLink}
                />
              </Form.Group>
            </div>
          </div>
        ))}
        <Button style={styles.addLink} onClick={handleAddCard}>
          Add New Link
        </Button>
      </div>
      <div>
        <Button type="submit" style={styles.submit}>
          Edit Link
        </Button>
        {/* <img src={display} alt="Display" style={styles.display} /> */}
      </div>
      <Form.Control
        onChange={handleOnChange}
        name="templateID"
        type="text"
        hidden
      />
      {message}
    </Form>
  );
}

const styles = {
  containerForm: {
    overflow: "auto",
    backgroundColor: "white",
    width: "60%",
    height: "60vh",
    marginLeft: "-40px",
    padding: "15px",
  },
  profile: {
    width: "200px",
    height: "200px",
    marginRight: "10px",
  },
  inputBio: {
    border: "none",
    borderBottom: "2px solid #7E7A7A",
  },
  inputLink: {
    border: "none",
    borderBottom: "2px solid #7E7A7A",
    backgroundColor: "#ECECEC",
  },
  image: {
    width: "150px",
    height: "150px",
  },
  containerCard: {
    backgroundColor: "#ECECEC",
    padding: "20px",
    borderRadius: "10px",
  },
  containerInputLink: {
    width: "100%",
  },
  addLink: {
    width: "100%",
    backgroundColor: "#FF9F00",
    border: "none",
  },
  display: {
    width: "200px",
    height: "300px",
    marginRight: "60px",
    marginTop: "60px",
  },
  submit: {
    backgroundColor: "#FF9F00",
    border: "none",
    display: "block",
    float: "end",
  },
};

export default FormEditLink;

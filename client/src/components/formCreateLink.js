// import { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import Profile from "../assets/unnamed.jpg";

// import Display1 from "../assets/display1.PNG";
// import Display2 from "../assets/display2.PNG";
// import Display3 from "../assets/display3.PNG";

// import { API } from "../config/API";

// function FormCreateLink(props) {
//   const [formLink, setFormLink] = useState([]);
//   const { choose } = props;

//   const [preview, setPreview] = useState(null);
//   const [message, setMessage] = useState(null);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     links: [
//       {
//         titleLink: "",
//         url: "",
//         image: "",
//       },
//     ],
//   });

//   let display = null;

//   if (choose === 1) {
//     display = Display1;
//   } else if (choose === 2) {
//     display = Display2;
//   } else if (choose === 3) {
//     display = Display3;
//   }

//   function randomId(length) {
//     var result = "";
//     var characters = "0123456789";
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//   }

//   const handleAddCard = (e) => {
//     e.preventDefault();
//     setFormLink((item) => [
//       ...item,
//       <div
//         className="d-flex mb-5"
//         style={styles.containerCard}
//         key={randomId(4)}
//       >
//         <img src={Profile} alt="Profile" style={styles.image} />
//         <div style={styles.containerInputLink} className="ms-4">
//           <Form.Group className="mb-4">
//             <Form.Label>Title Link</Form.Label>
//             <Form.Control
//               onChange={(e) => handleOnChange(e, i)}
//               name="titleLink"
//               type="text"
//               placeholder="ex. Your Title"
//               style={styles.inputLink}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Link</Form.Label>
//             <Form.Control
//               onChange={(e) => handleOnChange(e, i)}
//               name="url"
//               type="text"
//               placeholder="ex. Description Here"
//               style={styles.inputLink}
//             />
//           </Form.Group>
//         </div>
//       </div>,
//     ]);
//   };

//   // const handleOnChange = (e) => {
//   //   setForm({
//   //     ...form,
//   //     [e.target.name]:
//   //       e.target.type === "file" ? e.target.files : e.target.value,
//   //   });

//   //   if (e.target.type === "file") {
//   //     let url = URL.createObjectURL(e.target.files[0]);
//   //     setPreview(url);
//   //   }
//   // };

//   const handleOnChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]:
//         e.target.type === "file" ? e.target.files : e.target.value,
//     });

//     if (e.target.type === "file") {
//       let url = URL.createObjectURL(e.target.files[0]);
//       setPreview(url);
//     }
//   };

//   const handleOnSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       // const config = {
//       //   headers: {
//       //     "Content-type": "multipart/form-data",
//       //   },
//       // };
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };

//       // const formData = new FormData();
//       // formData.set("title", form.title);
//       // formData.set("description", form.description);
//       // formData.set("bookFile", form.bookFile[0], form.bookFile[0].name);

//       const response = await API.post("/link", form, config);

//       if (response.data.status === "success") {
//         const alert = (
//           <Alert
//             variant="success"
//             className="py-1 d-flex justify-content-center"
//           >
//             Success Add Book
//           </Alert>
//         );
//         setMessage(alert);
//       } else {
//         const alert = (
//           <Alert
//             variant="danger"
//             className="py-1 d-flex justify-content-center"
//           >
//             {response.data.message}
//           </Alert>
//         );
//         setMessage(alert);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   console.log(form);

//   return (
//     <Form onSubmit={handleOnSubmit} className="d-flex justify-content-between">
//       <div style={styles.containerForm}>
//         <div className="mb-5">
//           <div className="d-flex mb-3">
//             {/* {preview && (
//               <div className="d-flex justify-content-center">
//                 <img
//                   src={preview}
//                   style={{
//                     maxWidth: "200px",
//                     maxHeight: "200px",
//                     objectFit: "cover",
//                     margin: "10px 0px",
//                   }}
//                   alt="preview"
//                 />
//               </div>
//             )} */}
//             {/* <img
//               src={Profile}
//               alt="Profile"
//               style={styles.profile}
//               onChange={handleOnChange}
//             /> */}
//             <input type="file" placeholder="sss" name="profile" />
//           </div>
//           <Form.Group className="mb-3">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               onChange={handleOnChange}
//               name="title"
//               type="text"
//               placeholder="ex. Your Title"
//               style={styles.inputBio}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               onChange={handleOnChange}
//               name="description"
//               type="text"
//               placeholder="ex. Description Here"
//               style={styles.inputBio}
//             />
//           </Form.Group>
//         </div>

//         {formLink}
//         <Button style={styles.addLink} onClick={handleAddCard}>
//           Add New Link
//         </Button>
//       </div>
//       <div>
//         <Button type="submit" style={styles.submit}>
//           Publish Link
//         </Button>
//         <img src={display} alt="Display" style={styles.display} />
//       </div>
//       {message}
//     </Form>
//   );
// }

// const styles = {
//   containerForm: {
//     overflow: "auto",
//     backgroundColor: "white",
//     width: "60%",
//     height: "60vh",
//     marginLeft: "-40px",
//     padding: "15px",
//   },
//   profile: {
//     width: "200px",
//     height: "200px",
//     marginRight: "10px",
//   },
//   inputBio: {
//     border: "none",
//     borderBottom: "2px solid #7E7A7A",
//   },
//   inputLink: {
//     border: "none",
//     borderBottom: "2px solid #7E7A7A",
//     backgroundColor: "#ECECEC",
//   },
//   image: {
//     width: "150px",
//     height: "150px",
//   },
//   containerCard: {
//     backgroundColor: "#ECECEC",
//     padding: "20px",
//     borderRadius: "10px",
//   },
//   containerInputLink: {
//     width: "70%",
//   },
//   addLink: {
//     width: "100%",
//     backgroundColor: "#FF9F00",
//     border: "none",
//   },
//   display: {
//     width: "200px",
//     height: "300px",
//     marginRight: "60px",
//     marginTop: "60px",
//   },
//   submit: {
//     backgroundColor: "#FF9F00",
//     border: "none",
//     display: "block",
//     float: "end",
//   },
// };

// export default FormCreateLink;

import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import Display1 from "../assets/display1.png";
import Display2 from "../assets/display2.png";
import Display3 from "../assets/display3.png";

import { API } from "../config/API";
import { useNavigate } from "react-router-dom";

function FormCreateLink(props) {
  const { choose } = props;
  const navigate = useNavigate();

  let display = null;

  if (choose === 1) {
    display = Display1;
  } else if (choose === 2) {
    display = Display2;
  }

  const [preview, setPreview] = useState(null);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    templateID: null,
    links: [],
  });

  const handleAddCard = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      links: [...form.links, { titleLink: "", url: "" }],
    });
  };

  // const handleOnChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]:
  //       e.target.type === "file" ? e.target.files : e.target.value,
  //   });

  //   if (e.target.type === "file") {
  //     let url = URL.createObjectURL(e.target.files[0]);
  //     setPreview(url);
  //   }
  // };

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
      formData.set("templateID", choose);
      formData.set("links", JSON.stringify(form.links));
      formData.set("profile", form.profile[0], form.profile[0].name);

      const response = await API.post("/link", formData, config);
      console.log(response.data.data.user);

      if (response.data.status === "success") {
        const alert = (
          <Alert
            variant="success"
            className="py-1 d-flex justify-content-center"
          >
            Success Add Book
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
          Publish Link
        </Button>
        <img src={display} alt="Display" style={styles.display} />
      </div>
      <Form.Control
        onChange={handleOnChange}
        value={choose}
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

export default FormCreateLink;

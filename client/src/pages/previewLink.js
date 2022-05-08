import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../config/API";

import Display1 from "../components/display/display1";
import Display2 from "../components/display/display2";

export default function Preview() {
  const { id } = useParams();

  const [display, setDisplay] = useState();

  const getDisplay = async () => {
    try {
      const response = await API.get("/link/" + id);

      if (response.data.data.templateID === 1) {
        const preview = <Display1 data={response.data.data} />;
        setDisplay(preview);
      } else if (response.data.data.templateID === 2) {
        const preview = <Display2 data={response.data.data} />;
        setDisplay(preview);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDisplay(id);
  }, []);

  return <div>{display}</div>;
}

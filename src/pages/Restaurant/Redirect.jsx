import React, {useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";

function Redirect() {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    history.push(`/restaurant/${id}/overview`);
  });

  return <div></div>;
}

export default Redirect;
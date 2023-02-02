import React from "react";

function Images(props) {
  return <img roundedCircle={true}
  width="200" height="200"   src={props.img}  />;
}

export default Images;

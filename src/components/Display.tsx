import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const Display = (props: any) => {
  console.log(props);
  return (
    <>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>{props.value.name}</MDBCardTitle>
          <MDBCardText>{props.value.description}</MDBCardText>
          <MDBBtn
            className="btn btn-warning"
            onClick={() => props.onDelete(props.value.id)}
          >
            Delete
          </MDBBtn>
          <Link to={`/updateProduct/${props.value.id}`}>
            <MDBBtn className="ms-4 btn btn-info">Edit</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </>
    // <div className="container">
    //   <h2></h2>
    //   <p></p>
    // </div>
  );
};

export default Display;

import React from "react";
import "../../assets/style.css";
import Dobby from "../../images/Dobby.png";
const stripe = () => {
  return (
    <div className="container-fluid">
      <div className="row shadow-lg donate-container m-5">
        <div>
          <div className="row donate-title-box">
            <p className="col-12 donate-title d-flex mb-2 fw-bolder fs-1">
              How You Can Help
            </p>
          </div>
          <div className="row col-12">
            <h5 className="mt-4 mb-3 fw-bolder fs-3 text-center">
              <i class="fa-solid fa-circle-dollar-to-slot mr-2 lh-base"></i>
              All donations to the Bark Buddy Foundation will be distributed to
              local shelters to aid in facility maintenance and upgrades.
            </h5>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center,",
          }}
        >
          <img src={Dobby}
              alt="Beautiful Golden Retriever"
              style={{
                width: "200px",
                height: "auto",
                borderRadius: "50%",
                boxShadow: "0 0 5px 2px grey",
               }}
              />
        </div>
        <div className="row">
          <a
            href="https://buy.stripe.com/test_6oEg1m8Ly2ES81y288"
            className="stripe-donate fs-3 mt-4 fw-bolder justify-content-center"
          >
            Donate $1
          </a>
        </div>
        <div>
          <a
            href="https://buy.stripe.com/test_fZe5mId1O93g0z66op"
            className="stripe-donate col fs-3 fw-bolder justify-content-center"
          >
            Donate $15
          </a>
        </div>
        <div className="mb-3">
          <a
            href="https://buy.stripe.com/test_5kA8yUbXK1AO95CeUW"
            className="stripe-donate d-flex fs-3 fw-bolder"
          >
            Donate a different amount?
          </a>
        </div>
      </div>
    </div>
  );
};
export default stripe;
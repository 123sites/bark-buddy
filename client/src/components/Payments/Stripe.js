import React from "react";
import "../../assets/style.css";

const stripe = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="col-12 my-5 donate-title fw-bolder fs-2">
          <i class="fa-solid fa-circle-dollar-to-slot mr-5"></i>
          Would you like to Donate at least $1 <br></br> to our Bark Buddy
          charity foundation?
        </h2>
        <div>
          <a
            href="https://buy.stripe.com/test_6oEg1m8Ly2ES81y288"
            className="stripe-donate fs-3 fw-bolder"
          >
            Donate $1
          </a>
        </div>
        <div>
          <a
            href="https://buy.stripe.com/test_fZe5mId1O93g0z66op"
            className="stripe-donate fs-3 fw-bolder"
          >
            Donate $15
          </a>
        </div>
      </div>
    </div>
  );
};

export default stripe;

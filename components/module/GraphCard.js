import React from "react";

function GraphCard() {
  return (
    <div className="h-100 d-none d-lg-block">
      <div className="card shadow border-0">
        <div className="card-body">
          <div className="container h-100">
            <div className="d-flex justify-content-between">
              <div className="text-muted">
                <h5 className="m-0"></h5>
                <p className="m-0">Income</p>
                <h5 className="font-weight-bold">Rp2.120.000</h5>
              </div>
              <div className="text-muted">
                <h5 className="m-0"></h5>
                <p className="m-0">Expense</p>
                <h5 className="font-weight-bold">Rp1.560.000</h5>
              </div>
            </div>
            <div className="h-100 w-100 text-center">
              <img
                className="w-100 h-100 img img-fluid"
                src={require("../../assets/images/graphic.svg")}
                alt=""
              />
            </div>
          </div>
        </div>
        <style jsx>
          {`
            div.card {
              border-radius: 15px;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default GraphCard;

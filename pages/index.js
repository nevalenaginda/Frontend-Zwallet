import { useRouter } from "next/router";
import phone2 from "../assets/images/phone2.svg";
import backgroundBanner from "../assets/images/Vector2.svg";
export default function Home() {
  const router = useRouter();

  return (
    <div className="home">
      <div
        className="container-fluid min-vh-100 bg-blue"
        style={{
          backgroundImage: `url(${backgroundBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="container min-vh-100 d-flex flex-column">
          <div className="d-md-flex justify-content-between position-static pt-5">
            <h4 className="text-white font-weight-bold">ZWallet</h4>
            <div className="d-none d-md-block">
              <button
                className="btn btn-outline-light font-weight-bold mr-4"
                style={{ borderRadius: "12px" }}
                onClick={(e) => router.push("/auth/login")}
              >
                Login
              </button>
              <button
                className="btn btn-light font-weight-bold text-blue"
                style={{ borderRadius: "12px" }}
                onClick={(e) => router.push("/auth/register")}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center min-vh-100 text-center">
            <div className="align-self-center">
              <h1 className="font-weight-bold display-4 text-white">
                Awesome App
                <br />
                For Saving Time.
              </h1>
              <p className="text-light pt-4">
                We bring you a mobile app for banking problems that
                <br />
                oftenly wasting much of your times.
              </p>
              <button
                className="btn btn-light text-blue"
                style={{ borderRadius: "12px" }}
                onClick={(e) => router.push("/auth/login")}
              >
                Try It Free
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lighter">
        <div className="container py-5">
          <div className="pt-5">
            <h1 className="text-center font-weight-bold">
              <span className="text-blue">Why</span> Choose Zwallet?
            </h1>
            <p className="pt-3 text-center">
              We have some great features from the application and it’s totally
              free
              <br />
              to use by all users around the world.
            </p>
            <div className="pt-3">
              <div className="row">
                <div className="col-md text-center">
                  <div
                    className="card border-0 bg-transparent"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-4">
                      <h4
                        className="text-blue fas fa-phone p-2 rounded-circle"
                        style={{ background: "rgba(71, 58, 209, 0.1)" }}
                      ></h4>
                      <h5 className="font-weight-bold pt-3">24/7 Support</h5>
                      <p className="pt-4">
                        We have 24/7 contact support so you can contact us
                        whenever you want and we will respond it.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md text-center">
                  <div
                    className="card border-0"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-4">
                      <h4
                        className="text-blue fas fa-lock p-2 rounded-circle"
                        style={{ background: "rgba(71, 58, 209, 0.1)" }}
                      ></h4>
                      <h5 className="font-weight-bold pt-3">Data Privacy</h5>
                      <p className="pt-4">
                        We make sure your data is safe in our database and we
                        will encrypt any data you submitted to us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md text-center">
                  <div
                    className="card border-0 bg-transparent"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-4">
                      <h4
                        className="text-blue fas fa-download p-2 rounded-circle"
                        style={{ background: `rgba(71, 58, 209, 0.1)` }}
                      ></h4>
                      <h5 className="font-weight-bold pt-3">Easy Download</h5>
                      <p className="pt-4">
                        Zwallet is 100% totally free to use it’s now available
                        on Google Play Store and App Store.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ background: "rgba(71, 58, 209, 0.06)" }}
        className="d-flex justify-content-center p-4"
      >
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-2 col-md-4 text-center">
              <img
                className="img-fluid"
                src={require("../assets/images/brands/microsoft.svg")}
                alt=""
              />
            </div>
            <div className="col-6 col-lg-2 col-md-4 text-center">
              <img
                className="img-fluid"
                src={require("../assets/images/brands/dropbox.svg")}
                alt=""
              />
            </div>
            <div className="col-6 col-lg-2 col-md-4 text-center">
              <img
                className="img-fluid"
                src={require("../assets/images/brands/hnm.svg")}
                alt=""
              />
            </div>
            <div className="col-6 col-lg-2 col-md-4 text-center">
              <img
                className="img-fluid"
                src={require("../assets/images/brands/airbnb.svg")}
                alt=""
              />
            </div>
            <div className="col-6 col-lg-2 col-md-4 text-center">
              <img
                className="img-fluid"
                src={require("../assets/images/brands/canon.svg")}
                alt=""
              />
            </div>
            <div className="col-6 col-lg-2 col-md-4 text-center">
              <img
                className="img-fluid"
                src={require("../assets/images/brands/dell.svg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white py-5">
        <div className="container d-flex py-5 justify-content-center">
          <h1
            style={{
              background: "rgba(71, 58, 209, 0.06)",
              borderRadius: "85px",
            }}
            className="font-weight-bold p-md-4 m-0 text-blue"
          >
            Rp. 390.736.500
          </h1>
        </div>
        <h1 className="font-weight-bold text-center">
          <span className="text-blue">Money</span> has Been Transfered.
        </h1>
        <p className="text-center pt-3">
          That amount of money has been transfered from all users. We still
          <br />
          counting and going strong!
        </p>
      </div>
      <div style={{ background: "rgba(71, 58, 209, 0.06)" }} className="vh-100">
        <div className="row h-100 w-100 no-gutters">
          <div
            className="col d-lg-block d-none"
            style={{
              backgroundImage: `url(${phone2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className="col d-flex justify-content-center text-center text-md-left">
            <div className="align-self-center">
              <h1 className="font-weight-bold">
                All The <span className="text-blue">Great</span> <br />
                Zwallet Features.
              </h1>
              <div className="card" style={{ borderRadius: "25px" }}>
                <div className="card-body">
                  <p className="font-weight-bold">
                    <span className="text-blue">1.</span> Small Fee
                  </p>
                  <span>
                    We only charge 5% of every success transaction done in
                    Zwallet app.
                  </span>
                </div>
              </div>
              <div className="card my-3" style={{ borderRadius: "25px" }}>
                <div className="card-body">
                  <p className="font-weight-bold">
                    <span className="text-blue">2.</span> Data Secured
                  </p>
                  <span>
                    All your data is secured properly in our system and it’s
                    encrypted.
                  </span>
                </div>
              </div>
              <div className="card" style={{ borderRadius: "25px" }}>
                <div className="card-body">
                  <p className="font-weight-bold">
                    <span className="text-blue">3.</span> User Friendly
                  </p>
                  <span>
                    Zwallet come up with modern and sleek design and not
                    complicated.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ background: "#fafcff" }}>
        <div className="container py-5 text-center">
          <h1 className="font-weight-bold">
            What Users are <span className="text-blue">Saying.</span>
          </h1>
          <p>
            We have some great features from the application and it’s totally
            free
            <br />
            to use by all users around the world.
          </p>
          <div className="row">
            <div className="col-2 d-none d-md-flex">
              <button
                className="btn align-self-center"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <h3 className="m-0 fas fa-arrow-left"></h3>
              </button>
            </div>
            <div className="col">
              <div className="card border-0" style={{ borderRadius: "30px" }}>
                <div className="card-body">
                  <div className="py-5">
                    <img src={require("../assets/images/1.svg")} alt="" />
                    <h4 className="pt-3">Alex Hansinburg</h4>
                    <p>Designer</p>
                    <p className="text-center">
                      “This is the most outstanding app that I’ve ever try in my
                      live, this app is such an amazing masterpiece and it’s
                      suitable for you who is bussy with their bussiness and
                      must transfer money to another person aut there. Just try
                      this app and see the power!”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 d-none d-md-flex justify-content-end">
              <button
                className="btn align-self-center"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <h3 className="m-0 fas fa-arrow-right"></h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-blue">
        <div className="container py-5">
          <div className="pb-3">
            <h3 className="font-weight-bold text-white">Zwallet</h3>
            <p className="text-white">
              Simplify financial needs and saving <br />
              much time in banking needs with <br />
              one single app.
            </p>
          </div>
          <hr style={{ borderColor: "rgba(255, 255, 255, 0.6)" }} />
          <div className="row">
            <div className="col-md">
              <p className="text-white">2021 Zwallet. All right reserved.</p>
            </div>
            <div className="col-md">
              <div className="row text-white">
                <div className="col-sm">
                  <p>+62 5637 8882 9901</p>
                </div>
                <div className="col-sm">
                  <p>contact@zwallet.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @media screen and (max-width: 992px) {
            .display-4 {
              font-size: 2.5rem;
            }
          }

          .bg-lighter {
            background: #fafcff;
          }
        `}
      </style>
    </div>
  );
}

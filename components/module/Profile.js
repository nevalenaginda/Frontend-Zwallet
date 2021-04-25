import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { updateUser } from "../../configs/redux/actions/user";

function Profile() {
  const dispatch = useDispatch();
  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;
  const { user } = useSelector((state) => state.user);
  const [dataUser, setDataUser] = useState(user);
  const imageRef = useRef(null);
  const [imgUrl, setImgUrl] = useState(`${urlImg}/images/${user.image}`);
  const [dataImage, setDataImage] = useState({ image: null });

  const handleChangeImage = (event) => {
    const imgFiles = event.target.files[0];
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setDataImage({
      image: imgFiles,
    });
  };

  const handleFormChange = (event) => {
    const dataNew = { ...dataUser };
    dataNew[event.target.name] = event.target.value;
    setDataUser(dataNew);
    console.log(dataUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", dataUser.name);
    formData.append("phone", dataUser.phone);
    if (dataImage.image !== null) {
      formData.append("image", dataImage.image);
    }

    dispatch(updateUser(formData, user.id))
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  useEffect(() => {
    setDataUser(user);
    setImgUrl(`${urlImg}/images/${user.image}`);
  }, [user]);

  return (
    <div>
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="py-3">
            <div className="container d-flex justify-content-center mb-2">
              {dataUser.image ? (
                <img
                  className="img-people"
                  src={`${urlImg}/images/${dataUser.image}`}
                  alt=""
                />
              ) : (
                <img
                  className="img-people"
                  src={require("../../assets/images/default-user.svg")}
                  alt=""
                />
              )}
            </div>
            <div
              className="text-center"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              {/* <input
                type="file"
                accept="image/png/jpg"
                id="fileUpload"
                className="d-none"
              /> */}
              <span className="text-muted pointer">
                <i className="fas fa-pencil-alt"></i> Edit
              </span>
            </div>
            <div className="container text-center">
              {dataUser.name ? (
                <h4 className="font-weight-bold">{dataUser.name}</h4>
              ) : (
                <h4 className="font-weight-bold"></h4>
              )}
              {dataUser.phone ? (
                <p className="text-muted m-0">{dataUser.phone}</p>
              ) : (
                <p className="text-muted m-0"></p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content container p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit your data
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              <div className="row ">
                <div className="col-12 mb-2 text-center">
                  {user.image && (
                    <img src={imgUrl} alt="Profile" className="image-user " />
                  )}
                </div>
                <div className="col-12 text-center">
                  <input
                    type="file"
                    name="image"
                    className=" my-2"
                    ref={imageRef}
                    onChange={(event) => handleChangeImage(event)}
                  />
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label htmlFor="name" className="col col-form-label">
                    User Name
                  </label>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                      placeholder="Enter your user name"
                      value={dataUser.name}
                      name="name"
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col col-form-label">
                    Email
                  </label>
                  <div className="col-8">
                    {dataUser.email && (
                      <input
                        type="text"
                        className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                        placeholder="Enter your user name"
                        value={dataUser.email}
                        name="email"
                        disabled
                      />
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="phone" className="col col-form-label">
                    Phone Number
                  </label>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                      placeholder="Enter your user name"
                      value={dataUser.phone}
                      name="phone"
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-gray radius-12"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-blue radius-12"
                data-dismiss="modal"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .img-people {
          width: 75px;
          height: 75px;
          border-radius: 12px;
          object-fit: cover;
        }
        .image-user {
          height: 15vh;
          width: 10vh;
          object-fit: cover;
          border-radius: 15px;
        }
        div.card {
          border-radius: 15px;
        }
        .btn-blue {
          background-color: #6379f4;
          color: white;
        }

        .btn-blue:hover {
          background-color: #5365c9;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default Profile;

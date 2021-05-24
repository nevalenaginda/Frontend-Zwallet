import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import Router from "next/router";
import Footer from "../../components/module/Footer";
import NavBar from "../../components/module/NavBar";
import PersonalInfo from "../../components/module/PersonalInfo";
import SideBar from "../../components/module/SideBar";

export default function personalInformation() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    axios
      .get(`${URLAPI}profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#a4a7b4",
        });
      });
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <NavBar></NavBar>

      <div className="container">
        <div className="row py-5 py-lg-5">
          <div className="col-3 d-none d-lg-block">
            <SideBar />
          </div>
          <div className="col">
            {user && (
              <PersonalInfo
                name={user.name}
                email={user.email}
                phone={user.phone}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// export const getServerSideProps = async (ctx) => {
//   const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
//   const URLFE = process.env.NEXT_PUBLIC_URL_FRONT_END_NO_SLASH;
//   try {
//     let cookie = "";
//     if (ctx.req) {
//       cookie = ctx.req.headers.cookie;
//     }
//     const res = await axios.get(`${URLAPI}profile`, {
//       withCredentials: true,
//       headers: {
//         cookie: cookie,
//       },
//     });
//     const data = res.data.data;
//     return { props: { user: data } };
//   } catch (error) {
//     console.log(error);
//     if (ctx.req) {
//       ctx.res.writeHead(301, { Location: `${URLFE}/auth/login` });
//       ctx.res.end();
//     }
//     if (!ctx.req) {
//       Router.push("/auth/login");
//     }
//     return { props: { user: {} } };
//   }
// };

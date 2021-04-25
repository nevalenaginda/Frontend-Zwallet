import React from "react";
import axios from "axios";
import Router from "next/router";
import Footer from "../../components/module/Footer";
import NavBar from "../../components/module/NavBar";
import PersonalInfo from "../../components/module/PersonalInfo";
import SideBar from "../../components/module/SideBar";

export default function personalInformation({ user }) {
  return (
    <div className="bg-light min-vh-100">
      <div className="d-none d-md-block">
        <NavBar></NavBar>
      </div>
      <div className="container">
        <div className="row py-lg-5">
          <div className="col-3 d-none d-md-block">
            <SideBar />
          </div>
          <div className="col">
            <PersonalInfo
              name={user.name}
              email={user.email}
              phone={user.phone}
            />
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <Footer />
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
  const URLFE = process.env.NEXT_PUBLIC_URL_FRONT_END_NO_SLASH;
  try {
    let cookie = "";
    if (ctx.req) {
      cookie = ctx.req.headers.cookie;
    }
    const res = await axios.get(`${URLAPI}profile`, {
      withCredentials: true,
      headers: {
        cookie: cookie,
      },
    });
    const data = res.data.data;
    return { props: { user: data } };
  } catch (error) {
    console.log(error);
    if (ctx.req) {
      ctx.res.writeHead(301, { Location: `${URLFE}/auth/login` });
      ctx.res.end();
    }
    if (!ctx.req) {
      Router.push("/auth/login");
    }
    return { props: { user: {} } };
  }
};

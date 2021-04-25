import React from "react";
import axios from "axios";
import Router from "next/router";
import Footer from "../../components/module/Footer";
import ManagePhoneNumber from "../../components/module/ManagePhoneNumber";
import NavBar from "../../components/module/NavBar";
import SideBar from "../../components/module/SideBar";

export default function managePhoneNumber({ user }) {
  return (
    <div className="bg-light min-vh-100">
      <NavBar></NavBar>

      <div className="container h-content">
        <div className="row py-5 py-lg-5">
          <div className="col-3 d-none d-lg-block">
            <SideBar />
          </div>
          <div className="col">
            <ManagePhoneNumber phone={user.phone} />
          </div>
        </div>
      </div>

      <Footer />
      <style jsx>{`
        @media (max-width: 767.98px) {
          .h-content {
            height: 80vh;
          }
        }
      `}</style>
    </div>
  );
}

managePhoneNumber.getInitialProps = async (ctx) => {
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
    return { user: data };
  } catch (error) {
    console.log(error);
    if (ctx.req) {
      ctx.res.writeHead(301, { Location: `${URLFE}/auth/login` });
      ctx.res.end();
    }
    if (!ctx.req) {
      Router.push("/auth/login");
    }
    return { user: {} };
  }
};

import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../components/module/NavBar";
import Footer from "../../components/module/Footer";
import SideBar from "../../components/module/SideBar";
import DetailHistoryTransfer from "../../components/module/DetailHistoryTransfer";

export default function index({ details }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="container min-vh-100">
        <div className="d-flex justify-content-center min-vh-100">
          <div className="align-self-center text-center">
            <div className="spinner-border mb-3 text-blue" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <h3 className="m-0">Please Wait</h3>
            <p className="m-0">Getting data</p>
          </div>
        </div>
      </div>
    );
  }
  //   console.log(details);

  return (
    <div className="bg-light min-vh-100">
      <div className="d-none d-md-block">
        <Navbar />
      </div>
      <div className="container">
        <div className="row h-row py-lg-5">
          <div className="col-3 d-none d-md-block">
            <SideBar></SideBar>
          </div>
          <div className="col">
            <DetailHistoryTransfer details={details} />
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <Footer />
      </div>
      <style jsx>{``}</style>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
  try {
    const id = ctx.params.id;
    const result = await axios.get(`${URLAPI}detailHistory/${id}`, {
      withCredentials: true,
    });
    const data = result.data.data;
    return {
      props: {
        details: data,
      },
    };
  } catch (err) {
    return {
      props: {
        details: null,
      },
    };
  }
};

export const getStaticPaths = async () => {
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
  const result = await axios.get(`${URLAPI}historyAdmin?limit=100`, {
    withCredentials: true,
  });
  const data = result.data.data;
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    fallback: true,
    paths: paths,
  };
};
// export const getServerSideProps = async (ctx) => {
//   const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
//   const URLFE = process.env.NEXT_PUBLIC_URL_FRONT_END_NO_SLASH;
//   const id = ctx.params.id;
//   try {
//     let cookie = "";
//     if (ctx.req) {
//       cookie = ctx.req.headers.cookie;
//     }
//     const res = await axios.get(`${URLAPI}detailHistory/${id}`, {
//       withCredentials: true,
//       headers: {
//         cookie: cookie,
//       },
//     });
//     const data = res.data.data;
//     return { props: { details: data } };
//   } catch (error) {
//     console.log(error);
//     if (ctx.req) {
//       ctx.res.writeHead(301, { Location: `${URLFE}/auth/login` });
//       ctx.res.end();
//     }
//     if (!ctx.req) {
//       Router.push("/auth/login");
//     }
//     return { props: { details: null } };
//   }
// };

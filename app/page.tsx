import GetStarted from "@/components/get-started";
import Nav from "@/components/main-nav";
import UsersLocationServers from "@/components/uls-container";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Global from "@/components/global-nw";
import Testimonials from "@/components/testimonials";
import Form from "@/components/form";
import Footer from "@/components/footer";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Nav />
      <GetStarted />
      <UsersLocationServers />
      <Features />
      <Pricing />
      <Global />
      <Testimonials />
      <Form />
      <Footer />
      <ToastContainer />
    </>
  );
}

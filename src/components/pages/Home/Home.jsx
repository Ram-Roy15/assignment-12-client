import Footer from "../Footer/Footer";
import Carosel from "./Banner/Carosel";
import Pakages from "./Pakages/Pakages";
import useRole from "../../hooks/useRole";
import MyPendingRequest from "../MyPendingRequest/MyPendingRequest";
import useAuth from "../../hooks/useAuth";
import MonthlyRequest from "../MonthlyRequest/MonthlyRequest";
import ExtraSection from "../ExtraSection/ExtraSection";
import PandingRequest from "../HR_Pages/PandingRequest";
import TopRequest from "../HR_Pages/TopRequest";
import LimittedStock from "../../root/LimittedStock";
// import ParcentagePage from "../../root/ParcentagePage";
import ExtraSection1 from "../../root/ExtraSection1";
import ExtraSection2 from "../../root/ExtraSection2";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [role, isLoading] = useRole();
  const { user } = useAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {role === "employee" && (
        <>
          <MyPendingRequest></MyPendingRequest>
          <MonthlyRequest></MonthlyRequest>
          <ExtraSection></ExtraSection>
        </>
      )}
      {role === "manager" && (
        <>
          <PandingRequest></PandingRequest>
          <TopRequest></TopRequest>
          <LimittedStock></LimittedStock>
          {/* <ParcentagePage></ParcentagePage> */}
          <ExtraSection1></ExtraSection1>
          <ExtraSection2></ExtraSection2>
        </>
      )}
      {!user && (
        <>
          <Carosel></Carosel>
          <Pakages></Pakages>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Home;

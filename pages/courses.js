import Seo from "../components/common/Seo";
import Header3 from "../components/header/Header3";
import DefaultFooter from "../components/footer/DefaultFooter";
import PortfolioTopTitle from "../components/portfolio/PortfolioTopTitle";
import PortfolioGallery2 from "../components/portfolio/PortfolioGallery2";
import Link from "next/link";
import CallToAction from "../components/portfolio/CallToAction";

const PortfolioV2 = () => {
  return (
    <>
      <Seo pageTitle="Portfolio V2" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header3 />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <PortfolioTopTitle />

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
      <PortfolioGallery2 />

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <CallToAction />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV2;

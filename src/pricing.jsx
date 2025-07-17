import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Reviews from "./components/reviews.jsx";
import "../public/styles/styles.css";
import "../public/styles/pricing.css";

function App() {

 const [currentConfig, setCurrentConfig] = React.useState(2);
 const configs = {
  "1": {
   price: 25, 
   dailyAmount: 3, 
   featureCount: 2
  },
  "2": {
   price: 35, 
   dailyAmount: 5, 
   featureCount: 4
  },
  "3": {
   price: 60, 
   dailyAmount: 10, 
   featureCount: 5
  }
 };
 
 return (
  <>
  <div className="main-container">
   <Header/>
    <section className="pricing">
      <h2 className="pricing__heading">Pricing</h2>
      <div className="pricing__options">
       <button className={(currentConfig === 1) ? "pricing__option--selected":"pricing__option"} onClick={() => setCurrentConfig(1)}><i className="fa-solid fa-square-check"></i>Basic</button>
       <button className={(currentConfig === 2) ? "pricing__option--selected":"pricing__option"} onClick={() => setCurrentConfig(2)}><i className="fa-solid fa-square-check"></i>Standard</button>
       <button className={(currentConfig === 3) ? "pricing__option--selected":"pricing__option"} onClick={() => setCurrentConfig(3)}><i className="fa-solid fa-square-check"></i>Advanced</button>
      </div>
      <div className="pricing__info">
       <div className="pricing__checkout">
        <div className="pricing__details">
         <h2 className="pricing__price">{`$${configs[currentConfig].price}`}</h2>
         <h3 className="pricing__name">{["Basic Pack", "Standard Pack", "Advanced Pack"][currentConfig-1]}</h3>
         <small>{`${configs[currentConfig].dailyAmount*30} Jobs • ${configs[currentConfig].dailyAmount} Jobs Daily • 1 Month`}</small>
        </div>
        <p className="pricing__payment-methods"><i className="fa-brands fa-cc-paypal"></i><i className="fa-brands fa-google-pay"></i></p>
        <button className="pricing__button" onClick={() => window.location = "/login"}>Checkout <i className="fa-solid fa-credit-card"></i></button>
       </div>
       <div className="pricing__features">
        <h2 className="pricing__features-heading">Services Included</h2>
        <p className="pricing__feature"><i className="fa-solid fa-square-check"></i> 1 Month of Virtual Job Application</p> 
        <p className="pricing__feature"><i className="fa-solid fa-square-check"></i>{`${configs[currentConfig].dailyAmount} Job Applications per day, ${configs[currentConfig].dailyAmount*30} Applications per Month`}</p> 
        <p className="pricing__feature"><i className="fa-solid fa-square-check"></i> Resume Optimization</p> 
        <p className={(currentConfig < 2) ? "pricing__feature--disabled":"pricing__feature"}><i className="fa-solid fa-square-check"></i> Job Application Tailoring</p> 
        <p className={(currentConfig < 3) ? "pricing__feature--disabled":"pricing__feature"}><i className="fa-solid fa-square-check"></i> Referral Generation</p> 
       </div>
      </div>
    </section>
    <section className="services">
     <h2 className="services__heading">Our Services</h2>
     <div className="services__services">
     <div className="services__service">
      <h3 className="services__service-header">Virtual Job Application</h3>
      <p className="services__service-paragraph">Professionals apply to job postings daily on job boards such as LinkedIn, Glassdoor and Indeed on your behalf. This includes filling out postings with your information, creating profiles on job portals and job boards, as well as tailoring your resume and cover letter to each individual job. You can track all of your progress and information through your online account portal after signing up.</p>
     </div>
     <div className="services__service">
      <h3 className="services__service-header">Job Application Tailoring</h3>
      <p className="services__service-paragraph">We have you upload a generic resume and cover letter, and then customize both according to every unique job posting. This includes making sure the resume reflects the job application as close as possible, and sells your skills to what every employer expects.</p>
     </div>
     <div className="services__service">
      <h3 className="services__service-header">Resume Optimization</h3>
      <p className="services__service-paragraph">Your uploaded resume will be properly reviewed by professionals, ensuring it's 1-2 pages long, ATS friendly, AI friendly and consisely highlights your skills and your strengths. We garentee your resume is not only functionally sound, but is accessible and sells you and your skills.</p>
     </div>
     <div className="services__service">
      <h3 className="services__service-header">Referral Generation</h3>
      <p className="services__service-paragraph">For every one of the applications you choose, our staff will reach out to company hiring managers and representatives to recommend you directly. As many componpanies offer referral bonuses to employees, we contact employees directly and encourage them to refer you for the position.</p>
     </div>
     </div>
    </section>
   <Reviews/>
   <Footer/>
  </div>
  </>
 )
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>);

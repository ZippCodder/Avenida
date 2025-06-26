import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "../public/styles/styles.css";
import "../public/styles/pricing.css";

function Option(props) {
 
 function login() {
  window.location = "/register";
 }

 return (
      <div className="pricing__option">
       <i className="fa-solid fa-square-check pricing__icon"></i>
       <h2 className="pricing__subheading">{props.name}</h2>
       <h3 className="pricing__price">{"$"+props.price}<small>/ 1 month</small></h3>
       <div className="pricing__features">
        {props.features.map(feature => <p><i className="fa-solid fa-square-check"></i>{feature}</p>)}
       </div>
       <button className="pricing__checkout" onClick={login}>Checkout</button>
      </div>
      );
}

function App() {
 
 return (
  <>
  <div className="main-container">
   <Header/>
    <main className="pricing">
     <div className="pricing__options">
     <h1 className="pricing__heading">No subscriptions, move at your own pace!</h1>
     <p className="pricing__subtext">Create an account or login before proceeding to checkout.</p>
       <Option name="Standard Pack" price="35" features={["5 job applications a day", "150 job applications in total", "Applicant profile review", "Tailored job applications", "Resume and cover letter optimization"]} />
       <Option name="Basic Pack" price="25" features={["3 job applications a day", "90 job applications in total", "Applicant profile review", "Tailored job applications", "Resume and cover letter optimization"]} />
       <Option name="Advanced Pack" price="50" features={["10 job applications a day", "300 job applications in total", "Applicant profile review", "Tailored job applications", "Resume and cover letter optimization"]} />
     </div>
    </main>
   <Footer/>
  </div>
  </>
 )
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>);

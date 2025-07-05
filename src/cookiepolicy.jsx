import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "../public/styles/styles.css";
import "../public/styles/policies.css";

function App() {

 return (
  <>
  <div className="main-container">
   <Header/>
    <main className="policy">
     <div className="policy__paragraph--first">
      <h2 className="policy__paragraph-title--first">Cookie Policy</h2>
      <p className="policy__paragraph-content">Last updated: 7/4/2025 This Cookie Policy explains how Centro uses cookies and similar technologies to recognize you when you visit our website at crcentro.com. It explains what these technologies are, why we use them, and your rights to control our use of them.</p>
     </div>
     <br/>
     <br/>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">What are Cookies?</h2>
      <p className="policy__paragraph-content">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies set by the website owner are called “first-party cookies.” Cookies set by parties other than the website owner are called “third-party cookies.” Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).</p>
     </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Why do we use Cookies?</h2>
      <p className="policy__paragraph-content">We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for analytics and other purposes.</p>
     </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Types of Cookies we Use</h2>
      <ul className="policy__paragraph-content">
       <li><b>Essential cookies</b>: These cookies are strictly necessary to provide you with services available through our Website.</li>
       <li><b>Performance and functionality cookies</b>: These are used to enhance the performance and functionality of our Website but are non-essential.</li>
       <li><b>Analytics and customization cookies</b>: These collect information to help us understand how our Website is being used.</li>
       <li><b>Advertising cookies</b>: These are used to make advertising messages more relevant to you.</li>
      </ul>
     </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">How can you Control Cookies?</h2>
      <p className="policy__paragraph-content">You have the right to decide whether to accept or reject cookies. You can set your web browser controls to accept or refuse cookies. You may also opt out of certain third-party cookies using third-party tools such as: Network Advertising Initiative, Digital Advertising Alliance. Please note that if you choose to reject cookies, you may still use our Website, though your access to some functionality and areas of our Website may be restricted.</p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Changes to this Cookie Policy</h2>
      <p className="policy__paragraph-content">We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>     
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Contact us</h2>
      <p className="policy__paragraph-content">{`If you have any questions about our use of cookies or this Cookie Policy, please contact us at: admin@centro.com`}</p>
      </div>
    </main>
   <Footer/>
  </div>
  </>
 )
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>);

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
      <h2 className="policy__paragraph-title--first">Privacy Policy</h2>
      <p className="policy__paragraph-content">
        Effective Date: 7/4/2025. Welcome to Centro. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website crcentro.com or use our services.
      </p>
      </div>
     <br/>
     <br/>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Information We Collect</h2>
      <p className="policy__paragraph-content">
       We may collect the following types of information:
       <ul>
        <li><b>Personal Information</b>: Name, email address, phone number, billing address, etc.</li>
        <li><b>Usage Data</b>: Pages visited, time spent on the site, clicks, referring pages, etc.</li>
        <li><b>Cookies and Tracking Technologies</b>: To enhance user experience and gather analytics.</li>
       </ul>
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">How We Use Your Information</h2>
      <p className="policy__paragraph-content">
       We use the information we collect to:
       <ul>
        <li>Provide, operate, and maintain our website and services</li>
        <li>Process transactions and send related information</li>
        <li>Communicate with you, including for customer service and updates</li>
        <li>Analyze usage and improve our services</li>
        <li>Comply with legal obligations</li>
       </ul>
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Sharing Your Information</h2>
      <p className="policy__paragraph-content">
       We do not sell your personal information. We may share your data with:
       <ul>
        <li><b>Service providers</b> who perform services on our behalf</li>
        <li><b>Legal authorities</b>, when required by law or to protect our rights</li>
        <li><b>Business transfers</b>, such as mergers or acquisitions</li>
       </ul>
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Your Data Protection Rights</h2>
      <p className="policy__paragraph-content">
       Depending on your location, you may have the right to:
       <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct or delete your personal data</li>
        <li>Object to or restrict certain data processing</li>
        <li>Withdraw consent where applicable</li>
        <li>Lodge a complaint with a data protection authority</li>
       </ul>
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Data Security</h2>
      <p className="policy__paragraph-content">We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, use, or disclosure.
      </p>
     </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Data Retention </h2>
      <p className="policy__paragraph-content">We retain your personal data only for as long as necessary for the purposes set out in this policy and to comply with legal obligations.
      </p>
     </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Third-Party Links</h2>
      <p className="policy__paragraph-content">Our website may contain links to third-party websites. We are not responsible for their privacy practices.
      </p>
     </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Children's Privacy</h2>
      <p className="policy__paragraph-content">Our services are not intended for individuals under the age of 16. We do not knowingly collect data from children.
      </p>
     </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Changes to This Privacy Policy</h2>
      <p className="policy__paragraph-content">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
      </p>
     </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Contact Us</h2>
      <p className="policy__paragraph-content">{`If you have any questions about our use of cookies or this Privacy Policy, please contact us at: admin@centro.com`}</p>
     </div>
    </main>
   <Footer/>
  </div>
  </>
 )
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>);

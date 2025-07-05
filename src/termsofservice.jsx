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
      <h2 className="policy__paragraph-title--first">Terms of Service</h2>
      <p className="policy__paragraph-content">Effective Date: 7/4/2025. Welcome to Centro. These Terms of Service govern your access to and use of our website, products, and services provided by crcentro.com. By using our Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.</p>
      </div>
      <br/>
      <br/>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Use of Our Services</h2>
      <p className="policy__paragraph-content">You agree to use our website only for lawful purposes and in a way that does not infringe on the rights of others or restrict or inhibit anyone else's use and enjoyment of the website.
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">User Accounts</h2>
      <p className="policy__paragraph-content">To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Intellectual Property</h2>
      <p className="policy__paragraph-content">All content on this website, including text, graphics, logos, and software, is the property of Centro or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Prohibited Activities</h2>
      <p className="policy__paragraph-content">
       You may not:
       <ul>
        <li>Use the service for any illegal or unauthorized purpose</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Interfere with the functionality of the website or services</li>
       </ul>
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Third-Party Links</h2>
      <p className="policy__paragraph-content">Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party sites.
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Termination</h2>
      <p className="policy__paragraph-content">We reserve the right to suspend or terminate your access to the website at any time, without notice or liability, for any reason, including if you violate these Terms.
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Disclaimer of Warranties</h2>
      <p className="policy__paragraph-content">Our website is provided without warranties of any kind. We do not guarantee that the service will be uninterrupted, secure, or error-free.
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Limitation of Liability</h2>
      <p className="policy__paragraph-content">To the fullest extent permitted by law, Centro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the website.
      </p>
      </div>
     <div className="policy__paragraph">
      <h2 className="policy__paragraph-title">Changes to These Terms</h2>
      <p className="policy__paragraph-content">We may update these Terms from time to time. Any changes will be effective immediately upon posting the revised version on our website. Your continued use of the website constitutes acceptance of the revised Terms.
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

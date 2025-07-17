import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Reviews from "./components/reviews.jsx";
import "../public/styles/styles.css";
import "../public/styles/checkout.css";

 function Feild(props) {
  
  const [filled, setFilled] = React.useState(false);
  const input = React.useRef(null);

  function change() {
   if (input.current.value !== "") {
    setFilled(true);
    return;
   }
  setFilled(false);
  }

  return (
   <div className="register__input" name={props.name}><input type={(props.password) ? "password":"text"} ref={input} name={props.name} onChange={change} placeholder={props.placeholder} minlength={props.minlength} required></input><i className="fa-solid fa-circle-check" style={{color: (filled) ? "var(--green-1)":"black", opacity: (filled) ? "1":"0.4"}}></i></div>
   );
 }

function App() {

 const [submitted, setSubmitted] = React.useState(false);
 const form = React.useRef(null);

 function submit(e) {
  e.preventDefault();
  setSubmitted(null);

  const {firstname, lastname, email, password, password_re, tos} = form.current.elements;
  
  fetch("/register", {
   method: "POST",
   body: JSON.stringify({
    firstname: firstname.value, 
    lastname: lastname.value, 
    email: email.value, 
    password: password.value, 
    passwordre: password_re.value, 
    tos: tos.value
   })
  }).then(data => {
   setSubmitted(true);
  }); 
 }
 
 return (
  <>
  <div className="main-container">
   <Header/>
    <main className="register">
     <div className="register__success" style={{display: (submitted) ? "block":"none"}}>
       <i className="fa-solid fa-circle-check"></i>      
      <h3 className="register__success-heading">Success!</h3>
      <p className="register__success-message">You'll receive an email link shortly for you to fill out your applicant profile.</p>
     </div>
     <form ref={form} onSubmit={submit} className="register__form" method="POST" action="/register" style={{display: (submitted) ? "none":"block"}}>
     <h1 className="register__heading">Welcome back!</h1>
       <Feild name="email" placeholder="Email"/>
       <Feild password={true} minlength={8} name="password" placeholder="Password"/>
      <div className="register__password-details">
        <p><a href="/register" className="login__register-link">I don't have an account yet!</a></p>
      </div>
       <button type="submit" style={{opacity: (submitted === null) ? "0.5":"1"}}>Submit</button>
     </form>
    </main>
   <Footer/>
  </div>
  </>
 )
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>);

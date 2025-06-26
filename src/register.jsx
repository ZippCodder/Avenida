import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "../public/styles/styles.css";
import "../public/styles/register.css";

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
     <h1 className="register__heading">Create your account!</h1>
     <feildset className="register__feildset">
      <legend>Your Info:</legend>
       <Feild name="firstname" placeholder="First Name"/>
       <Feild name="lastname" placeholder="Last Name"/>
     </feildset>
       <Feild name="email" placeholder="Email"/>
     <feildset className="register__feildset">
      <legend>Your Password:</legend>
       <Feild password={true} minlength={8} name="password" placeholder="Password"/>
       <Feild password={true} minlength={8} name="password_re" placeholder="Confirm Password"/>
     </feildset>
      <div className="register__password-details">
        <ul>
         <li>Password length must be at least 8 characters</li>
         <li>Must contain at least 1 special character</li>
         <li>Must not be the same as your email</li>
         <li>Passwords must match</li>
        </ul>
      </div>
      <div className="register__tos"><input type="checkbox" name="tos" required></input><label htmlFor="tos">I agree to the Terms of Service and Privacy Policy.</label></div>
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

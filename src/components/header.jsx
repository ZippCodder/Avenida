import React from "react";

export default function Header() {

 const [menuOpen, setMenuOpen] = React.useState(false);

return (
  <>
   <header className="header">
     <img className="header__logo" src="/public/images/icons/centro-website-logo.png" onClick={() => window.location= "/"}/>
     <h2 className="header__subtitle">JOB SERVICES</h2>
    <nav className="header__nav">
     <a className="nav__link" href="/">Home</a>
     <a className="nav__link" href="/pricing">Pricing</a>
     <a className="nav__link" href="/register">Register</a>
     <a className="nav__link" href="/register">My Account</a>
    </nav>
    <div className="header__dropdown" onClick={() => setMenuOpen(!menuOpen)}>
     <div className="dropdown__dot"></div>  
     <div className="dropdown__dot"></div>  
     <div className="dropdown__dot"></div>  
     <nav className="header__submenu" style={{display: (menuOpen) ? "block":"none"}}>
      <a className="header__sublink" href="/">Home</a>
      <a className="header__sublink" href="/pricing">Pricing</a>
      <a className="header__sublink" href="/register">Register</a>
      <a className="header__sublink" href="/register">Login</a>
      <a className="header__sublink" href="/register">My Account</a>
     </nav>
    </div>
   </header>
  </>
  )
}

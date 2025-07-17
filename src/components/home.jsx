import React from "react";
import Reviews from "./reviews.jsx";
import "../../public/styles/home.css";
import "../../public/styles/styles.css";
import PhoneFrame from "../../public/images/graphics/phone-frame.png";
import PhoneProfile from "/public/images/photos/jacob.png";
import Recruiters from "/public/images/photos/recruiters.png";
import Applicant from "/public/images/photos/applicant.png";

export default function Home() {

const backgroundImages = React.createRef(null);
const phoneDisplay = React.createRef(null);
const aboutBackground  = React.useRef(null);

React.useEffect(() => {
  window.addEventListener('scroll', () => {
   backgroundImages.current.style.top = `${-(window.pageYOffset/15)}%`;
   backgroundImages.current.style.opacity = `${1-(window.pageYOffset/700)}`;
   aboutBackground.current.style.transform = `translateY(${-(window.pageYOffset/2)}px)`;
   aboutBackground.current.style.height = `calc(100% + ${(window.pageYOffset/2)}px)`;
  }, false);
 },[]);

 return (
 <>
   <div className="main__background-images" ref={backgroundImages}>
    <div className="background-images__filter"></div>
   </div>
   <article className="main__intro">
    <h1 className="intro__heading">The <mark className="heading__free">human<img className="heading__underline" src="/public/images/graphics/blue-underline.png"></img></mark> job application service.</h1>
    <p className="intro__content">Search and apply to hundreds of relevant jobs, on auto-pilot. Tailored resumes and cover letters written by professionals.</p>
    <div className="intro__buttons">
     <button className="buttons__button buttons__register-user" onClick={() => window.location="/register"}>Create account<i className="fa-solid fa-circle-user"></i></button>
     <button className="buttons__button buttons__register-business" onClick={() => window.location="/pricing"}>See options<i className="fa-solid fa-briefcase"></i></button>
    </div>


   </article>
    <div ref={phoneDisplay} className="intro__phone">
     <div className="intro-phone__content .phone__content">
      <div className="display__screen display__screen--1 phone__content">
      <div className="content__top-panel">
       <h2 className="content__title">My Jobs</h2>
       <div>
       <p><i className="fa-solid fa-bell"></i><i className="fa-solid fa-calendar"></i></p>
        <img src={PhoneProfile}/>
       </div>
      </div>
      <div className="content__jobs">
       <div className="jobs__job"><p>Extein - Graphic Designer II<i className="fa-solid fa-angle-down"></i></p><i className="fa-solid fa-circle-check"></i></div>
       <div className="jobs__job"><p>Lotus - Web Design Associate<i className="fa-solid fa-angle-down"></i></p><i className="fa-solid fa-circle-check"></i></div>
       <div className="jobs__job"><p>Wreath - Junior Designer<i className="fa-solid fa-angle-down"></i></p><i className="fa-solid fa-circle-check"></i></div>
       <div className="jobs__job"><p>Experian - Web Developer<i className="fa-solid fa-angle-down"></i></p><i className="fa-solid fa-circle-check"></i></div>
       <div className="jobs__job"><p>Launchpad - Designer I<i className="fa-solid fa-angle-down"></i></p><i className="fa-solid fa-circle-check"></i></div>
       <div className="jobs__job"><p>LJJ - Multimedia Specialist<i className="fa-solid fa-angle-down"></i></p><i className="fa-solid fa-circle-check"></i></div>
       <div className="jobs__job"><p>Datasite - Associate Developer<i className="fa-solid fa-angle-down"></i></p><i className="fa-solid fa-circle-check"></i></div>
       <div className="jobs__job"><p>Kesher - Senior Design Specialist<i className="fa-solid fa-angle-down"></i></p><i className="fa-solid fa-circle-check"></i></div>
      </div>
      <div className="content__bottom-buttons">
       <div className="bottom-buttons__button"><h3><i className="fa-solid fa-magnifying-glass"></i> Apply</h3></div>
       <div className="bottom-buttons__button"><h3><i className="fa-regular fa-rectangle-list"></i> My Jobs</h3></div>
       <div className="bottom-buttons__button"><h3><i className="fa-solid fa-user"></i> Profile</h3></div>
      </div>
     </div>
     </div>
     <img className="phone__frame" src={PhoneFrame}/>
    </div>
   <article className="main__about">
    <div ref={aboutBackground} className="about__background"></div>
    <div className="about__intro">
    <h2 className="about__heading">Focus on acing your interviews, we'll handle the rest.</h2>
    <p className="about__content">Weather you're looking for a job, trying to make a career change or looking to upgrade from your current company, we're here for You. Our role is to take away the headache. We apply to jobs on your behalf, so that You can take care of your finances, practice for interviews and prioritize your mental health. All without breaking the bank!</p>
    </div>
    <button className="about__get-started" onClick={() => window.location = "/register"}>Get started!</button>
   </article>
   <section className="main__user-features">
    <div className="user-features__feature">
     <i className="fa-solid fa-tags feature__icon"></i>
     <div className="feature__text">
      <h3 className="feature__title">Flexible</h3>
      <p className="feature__content">No fixed subscriptions. Apply to the jobs you want, when you want. One single payment, one month at a time.</p>
     </div>
    </div>
    <div className="user-features__feature">
      <i className="fa-solid fa-piggy-bank feature__icon"></i>
     <div className="feature__text">
      <h3 className="feature__title">Cheap</h3>
      <p className="feature__content">Look for jobs on auto-pilot without breaking the bank. Take advantage of the lowest prices of any online service.</p>
     </div>
    </div>
    <div className="user-features__feature">
     <i className="fa-solid fa-shield-halved feature__icon"></i>
     <div className="feature__text">
      <h3 className="feature__title">Trustworthy</h3>
      <p className="feature__content">You can trust us to find and make you stand out to any relevant jobs that meet your criteria.</p>
     </div>
    </div> 
    <div className="user-features__feature">
     <i className="fa-solid fa-bolt feature__icon"></i>
     <div className="feature__text">
      <h3 className="feature__title">Fast</h3>
      <p className="feature__content">Create your account and fill out your applicant profile to get started, all in under 20 minutes. We'll take it from there.</p>
     </div>
    </div> 
    <div className="user-features__feature">
     <i className="fa-solid fa-circle-check feature__icon"></i>
     <div className="feature__text">
      <h3 className="feature__title">Easy</h3>
      <p className="feature__content">We keep things easy by relieving you of the headache, so that you can focus on your life.</p>
     </div>
    </div> 
    <div className="user-features__feature">
     <i className="fa-solid fa-eye feature__icon"></i>
     <div className="feature__text">
      <h3 className="feature__title">Transparent</h3>
      <p className="feature__content">Track your submitted applications daily through the online portal, complete any pending tasks and provide feedback if needed.</p>
     </div>
    </div> 
   </section>
   <section className="main__for-business">
    <article className="for-business__business-intro">
     <h1 className="business-intro__heading">Never miss another opportunity.</h1>
     <p className="business-intro__content">There's always somthing better. Plan your job upgrade now, and secure your financial future by never missing out on better opportunities while in your current job. All on auto-pilot.</p>
     <button className="for-business__register" onClick={() => window.location = "/pricing"}>Try 1 month!</button>
    </article>
    <div className="for-business__images">
     <img className="for-business__photo photo-1" src={Recruiters}></img> 
     <img className="for-business__photo photo-2" src={Applicant}></img> 
    </div>
   </section>
   <section className="main__business-benefits">
     <div className="business-benefits__benefit">
      <h4 className="benefit__title"><i className="fa-solid fa-sailboat"></i> Reach far and wide</h4>
      <p className="benefit__content">We submit job applications on your behalf from over 4 of the major job search services including Linkedin, Indeed and Glassdoor. We apply to 3-10 jobs a day, prioritizing the newest postings as soon as they come out to ensure your resume will be found.</p>
     </div> 
     <div className="business-benefits__benefit">
      <h4 className="benefit__title"><i className="fa-solid fa-clock"></i> Save hours of work</h4>
      <p className="benefit__content">We'll do it all. From finding the right job, to tailoring the resume and cover letter, accurately submitting your information, messaging recruiters and setting-up profiles on countless company job portals. We'll focus on the dirty-work so that you can do you.</p>
     </div> 
     <div className="business-benefits__benefit">
      <h4 className="benefit__title"><i className="fa-solid fa-arrow-trend-up"></i> Quality over quantity</h4>
      <p className="benefit__content">Paid professionals search for the jobs that best match your resume and expectations, and tailor each application to the position. Unlike AI job appliers, which submit sub-par applications, apply to irrelevant postings and inflate the applicant pool, lowering the chances for everyone.</p>
     </div> 
     <div className="business-benefits__benefit">
      <h4 className="benefit__title"><i className="fa-solid fa-robot"></i>We don't rely on AI</h4>
      <p className="benefit__content">80% of hiring managers reject AI resumes. AI tends to produce generic, bland cookie-cutter results. Recruiters easily recognize AI resumes and cover letters, and will discard them on sight. We keep things human tailored, and specific to you and the job.</p>
     </div> 
     <div className="business-benefits__benefit">
      <h4 className="benefit__title"><i className="fa-solid fa-fire"></i> Combat layoffs and job insecurity</h4>
      <p className="benefit__content">Everything is temporary. They say you're disposable, but so are they. Get updated constantly on the latest jobs, and never miss an opportunity to improve your salary, get more experience and secure your future.</p>
     </div> 
     <div className="business-benefits__benefit">
      <h4 className="benefit__title"><i className="fa-solid fa-list"></i> Track your progress</h4>
      <p className="benefit__content">Log into your account portal whenever you need either online or in the app. See the company, date and link to for each completed application and check for requests for additional information. Adjust the status of each application to track your recruitment processes.</p>
     </div> 
   </section>
   <Reviews/>
 </>
 )
}

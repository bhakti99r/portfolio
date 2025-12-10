/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../homepage/homepage.scss";
import github from "../../assets/images/github.svg";
import twitter from "../../assets/images/twiter.svg";
import insta from "../../assets/images/insta.svg";
import cube from "../../assets/images/cube.svg";
import linkdin from "../../assets/images/linkdin.svg";
import profile from "../../assets/images/bhakti-pic.png";
import { useEffect, useRef } from "react";
import Header from "../Header";

const HomePage = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 } // detects when 50% of section is on screen
    );

    sectionRefs.current.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header />
      <main>
        <div className="left-sociallink">
          <ul>
            <li>
              <a
                href="https://github.com/bhakti99r/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={github} alt="twitter" className="" />
              </a>
            </li>
            <li>
              <img src={twitter} alt="twitter" className="" />
            </li>
            <li>
              <img src={insta} alt="twitter" className="" />
            </li>
            <li>
              <img src={linkdin} alt="twitter" className="" />
            </li>
            <li>
              <img src={cube} alt="twitter" className="" />
            </li>
          </ul>
        </div>
        <div className="right-sociallink">
          <a href="#">rbhakti12@gmail.com</a>
        </div>
        <div className="container">
          <div
            className="profile-section section"
            ref={(el) => (sectionRefs.current[0] = el)}
          >
            <h1 className="name-title">Hi, My name is </h1>
            <h2 className="dev-name">Bhakti Rane</h2>
            <h3 className="name-subtitle">I build things for the web.</h3>
            <p className="name-desc">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences.
            </p>
            <Link to="" className="btn btn-contact">
              Contact Me
            </Link>
          </div>
          <div
            className="about-section section"
            id="about"
            ref={(el) => (sectionRefs.current[1] = el)}
          >
            <h2 className="section-title">About Me</h2>
            <div className="about-box">
              <div className="about-box-left">
                <p className="about-box-desc">
                  Hello, My name is Bhakti Rane, I have Experienced Software
                  Developer with 4+ years of expertise in developing web
                  applications using wide range of frontend technologies
                </p>
                <p className="few-technology-text">
                  Here are a few technologies I’ve been working with recently:
                </p>
                <ul className="few-technology">
                  <li>Javascript</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>ReactJs</li>
                  <li>SCSS</li>
                  <li>Bootstrap</li>
                  <li>TailwindCss</li>
                  <li>KendoUI</li>
                  <li>Redux</li>
                  <li>GIT</li>
                </ul>
              </div>
              <div className="about-box-right">
                <img src={profile} alt="profile" className="profile-img" />
              </div>
            </div>
          </div>
          <div
            className="experienced-section section"
            id="experience"
            ref={(el) => (sectionRefs.current[2] = el)}
          >
            <h2 className="section-title">Where I've Worked</h2>
            <div className="experienced-box">
              <div className="experienced-box-left">
                <p className="company-name"> NeoSoft technologies</p>
              </div>
              <div className="experienced-box-right">
                <p className="experienced-box-right-title">
                  Front End Developer <span> @NeoSoft technologies</span>
                </p>
                {/* <span>hello</span> */}
                <p>Aug 2021 - Present</p>
                <ul className="experienced-box-right-list">
                  <li>
                    Experienced Software Developer with 3 years of expertise in
                    developing web applications using wide range of frontend
                    technologies, including ReactJs and JavaScript.
                  </li>
                  <li>
                    Proficient in translating design concepts into pixel-perfect
                    and responsive web layouts using HTML5 and CSS3. Skilled in
                    creating intuitive user interfaces and optimizing website
                    performance for various devices and browsers.
                  </li>
                  <li>
                    {" "}
                    Passionate about staying updated with the latest web
                    technologies and design trends to continuously enhance
                    skills and deliver innovative solutions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="project section"
            id="work"
            ref={(el) => (sectionRefs.current[3] = el)}
          >
            <h2 className="section-title">Projects</h2>
            <div>
              <ul className="project-card-wrapper">
                <li className="project-card">
                  <p className="project-name">Ekyc</p>
                  <p className="project-desc">
                    E-KYC or electronic Know Your Customer is essentially the
                    process by which KYC is done. So, eKYC is when authorised
                    organisations and agents verify a customer's identity and
                    address digitally via Aadhaar authentication.
                  </p>
                  <div className="project-stacklist-wrapper">
                    <ul className="project-stacklist">
                      <li>html</li>
                      <li>css</li>
                      <li>JavaScript</li>
                      <li>scss</li>
                      <li>reactJs</li>
                      <li>Tailwindcss</li>
                    </ul>
                  </div>
                </li>
                <li className="project-card">
                  <p className="project-name">Cosmos</p>
                  <p className="project-desc">
                    In cosmos project created on multiple single UI, Graphs,
                    dark-mode, Multiple Reports and forms. This project aims to
                    provide a user-friendly and responsive. multiple cosmos user
                    can be login here telecaller users, partner users
                  </p>
                  <div className="project-stacklist-wrapper">
                    <ul className="project-stacklist">
                      <li>html</li>
                      <li>css</li>
                      <li>JavaScript</li>
                      <li>scss</li>
                      <li>reactJs</li>
                    </ul>
                  </div>
                </li>
                <li className="project-card">
                  <p className="project-name">Open API</p>
                  <p className="project-desc">
                    In tezz API website created on multiple single UI and forms.
                    This project aims to provide a user-friendly and responsive.
                    Here BFSL giving open API’s Documentations.
                  </p>
                  <div className="project-stacklist-wrapper">
                    <ul className="project-stacklist">
                      <li>html</li>
                      <li>css</li>
                      <li>JavaScript</li>
                      <li>scss</li>
                      <li>reactJs</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="getin-touched section"
            id="contact"
            ref={(el) => (sectionRefs.current[4] = el)}
          >
            <h2 className="section-title">Get In Touched</h2>
            <p className="name-desc">
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
            <a
              href="mailto:rbhakti12@gmail.com"
              // href="https://mail.google.com/mail/?view=cm&fs=1&to=rbhakti12@gmail.com"
              // target="_blank"
              // rel="noreferrer"
              className="btn btn-contact"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;

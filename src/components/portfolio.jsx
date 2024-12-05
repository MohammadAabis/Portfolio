import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

//import we protect you images
import charity from "../img/main.png"
import charity1 from "../img/signup.png"
import charity2 from "../img/login.png"
import charity3 from "../img/list.png"
import charity4 from "../img/dashboard.png"
import charity5 from "../img/workFlow.png"

// import hrms images
import hrms from "../img/hrms-main.jpg"
import hrms1 from "../img/hrms-addEmp.png"
import hrms2 from "../img/hrms-dash.png"
import hrms3 from "../img/hrms-list.png"

// import school images
import school from "../img/school-main.png"
import school1 from "../img/school-login.png"
import school2 from "../img/school-home.png"
import school3 from "../img/school-addstudent.png"
import school4 from "../img/school-addstudent.png"
import school5 from "../img/school-addUser.png"


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  These are my recent projects.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={charity} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={charity} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">We Protect You</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap ReactJS NodeJS  SQL Server
                          </span>
                        </div>                        
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>                      
                    </div>
                  </div>
                </a>
                <div className="container">
                  <span className="detail">
                    We Protect You is a charitable web application developed to support indigent. The platform allows
                    indigent, donors, and NGOs to register. Indigent can post their specific requirements, such 
                    as groceries, money, or medicines, based on predefined categories. Donors and NGOs can then provide the necessary 
                    assistance. The administrator reviews and approves posts to ensure their validity. Additionally, NGOs can contact 
                    donors to request support for their charitable activities.
                  </span>
                </div>
                <a
                  href={charity1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={charity2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={charity3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={charity4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={charity5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={hrms} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={hrms} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">HRMS for OFFICE</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap ReactJS NodeJS PostgreSQL
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="container">
                  <span className="detail">
                    We developed an advanced Human Resource Management System (HRMS) designed to efficiently manage 
                    and maintain comprehensive records of office and employees. This system streamlines the tracking of 
                    employee information, equipment inventory, and related administrative tasks, ensuring seamless operations and 
                    enhanced productivity. The HRMS incorporates robust features for data management, and reporting, 
                    making it an indispensable tool for modern office environments.
                  </span>
                </div>
                <a
                  href={hrms1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hrms2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={hrms3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={school} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={school} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">School Management System</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap ReactJS NodeJs PostgreSQL
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="container">
                  <span className="detail">
                    Our school management system is developed to efficiently handle and manage all school-related 
                    records. This system is basically to maintains student records such as attendance, fees, admissions, and examinations but 
                    also streamlines administrative processes.
                  </span>
                </div>
                <a
                  href={school1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={school2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={school3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={school4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={school5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">BidsForce</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS NextJS PostgreSQL FastAPI Tailwind
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="container">
                  <span className="detail">
                    Bidsforce was developed to streamline and manage the bidding process efficiently. This platform includes 
                    comprehensive features to handle RFX/RFQ processes, ensuring smooth and transparent operations. It enables 
                    users to create and manage requests for quotations (RFQ) and requests for proposals (RFP), while also 
                    facilitating vendor evaluations and bid comparisons. The system supports secure document management, 
                    tracking of bid status, and automated notifications, which help in maintaining effective communication with vendors.
                  </span>
                </div>
                <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

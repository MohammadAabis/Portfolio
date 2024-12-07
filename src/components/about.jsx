import React from "react";
import stock from "../img/about-img.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content: <p className="text-secondary">Hello!</p>,
        },
        {
          id: "second-p-about",
          content: (
            <p className="text-secondary">
              This is Mohammad Aabis, a passionate web developer who is always
              eager to learn new things and keep myself updated with the latest
              technology.
            </p>
          ),
        },
        {
          id: "third-p-about",
          content: (
            <p className="text-secondary">
              I chose this field as a career because when I first started coding
              and even making simple console programs, it felt like magic. I
              gradually fell in love with coding because of this magical
              feeling.
            </p>
          ),
        },
        {
          id: "third-p-about",
          content: (
            <p className="text-secondary">
              As a <strong>NodeJS</strong> and <strong>NextJS</strong>{" "}
              developer, I have more than 2 years of experience in web
              development. During these years, I have mostly worked with teams
              and sometimes alone. I developed scalable projects by optimizing
              workflows and enhancing data accessibility. Additionally, I have
              successfully implemented various features that significantly
              improved user experience and increased client satisfaction.
            </p>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="about-sec">
                      <div className="about-sec-img">
                        <img src={stock} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

import React from "react";
import imageOverlay from "../img/earth.jpg";

const Contact = () => {
  // const [result, setResult] = useState("");
  // const [sending, setSending] = useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setSending("Sending....");

  //   const formData = new FormData(event.target);
  //   formData.append("access_key", "your-secret-key");
  
  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setSending("");
  //     setResult("Form Submitted Successfully");

  //     setTimeout(() => {
  //       setResult("");
  //     }, 2000);
  //   } else {
  //     console.log("Error", response);
  //     setResult("Error in form submission");
  //   }
  // };

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    {/* {sending && (
                      <div className="bg-info sending">{sending}</div>
                    )}
                    {result && (
                      <div className="bg-success sendiing">{result}</div>
                    )} */}
                    <div>
                      <form className="contactForm" method="POST" data-netlify="true">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                id="message"
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Simply fill the from and send me an email.
                      </p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://github.com/MohammadAabis"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/mohammadaabis/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box"></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Resume</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="d-flex justify-content-center align-items-center">
                <iframe
                  src="/Resume(D-24).pdf"
                  width="100%"
                  height="600px"
                  title="Resume"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

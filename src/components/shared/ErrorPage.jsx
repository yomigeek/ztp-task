import React from 'react';
import NavBar from './NavBar';

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <section className="error-area padding-top-100px padding-bottom-50px text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-content">
                <div className="section-heading">
                  <h2 className="sec__title mb-3">
                    Uh-oh! Something went wrong :(
                  </h2>
                  <p className="sec__desc">
                    We are very sorry for inconvenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;

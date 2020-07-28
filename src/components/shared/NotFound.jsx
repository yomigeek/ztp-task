import React from 'react';
import NavBar from './NavBar';

const NotFound = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <section className="error-area padding-top-100px padding-bottom-50px text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-content">
                <div className="section-heading">
                  <h2 className="sec__title mb-3">Uh-oh! Page not found :(</h2>
                  <p className="sec__desc">
                    We are very sorry for inconvenience. It looks like you're
                    trying to access a page <br /> that either has been deleted
                    or never even existed.
                  </p>
                </div>
                <div className="btn-box mt-4">
                  <a href="/" className="theme-btn">
                    <i className="la la-reply"></i> Return to Home
                  </a>
                </div>
                {/* <div className="error-img mt-4">
                  <img src="images/404.jpg" alt="" className="img-fluid" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;

import React from 'react';

const NavBar = () => {

  return (
    <>
      <header className="header-area">
        <div className="header-menu-wrapper header-fixed">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="menu-full-width">
                  <div className="logo">
                    <a href="/">
                      <img
                        src="https://res.cloudinary.com/kugoo/image/upload/v1595894607/tests/logo.png"
                        alt="logo"
                        // className="app-logo"
                        width="70px"
                        height="65px"
                      />
                    </a>
                  </div>
                  <div className="main-menu-content">
                  
                  </div>
                  <div className="logo-right-content">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-nav-container">
          <div className="humburger-menu">
            <div className="humburger-menu-lines side-menu-close"></div>
          </div>
          <div className="side-menu-wrap">
          
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;

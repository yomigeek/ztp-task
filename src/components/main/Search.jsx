import React from 'react';

const Search = ({onChange, onClear, searchActivity}) => {
  return (
    <>
      <div className="col-lg-7">
        <div className="sidebar mt-0">
          <div className="sidebar-widget">
            {' '}
        
            <h3 className="widget-title">Search:</h3>
            <div className="contact-form-action mb-4">
              <form action="#">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter episode title"
                    onChange={onChange}
                  />
                </div>
                {searchActivity ? (
                  <>
                    <i className="las la-window-close clear-text"></i>
                    <span className="clear-text" onClick={onClear}>
                      clear search
                    </span>
                  </>
                ) : (
                  ''
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

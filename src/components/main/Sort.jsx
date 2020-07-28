import React from 'react';

const Sort = ({onClear, onChange}) => {
  return (
    <>
      <div className="col-lg-5">
        <div className="sidebar mt-0">
          <div className="sidebar-widget">
            {' '}
            <h3 className="widget-title">Sort By:</h3>
            <div className="contact-form-action mb-4">
              <form action="#">

                <div className="input-box">
                  {/* <label className="label-text">Recenct Episode</label> */}
                  <div className="custom-label">
                    <select onChange={onChange} name="sort">
                      <option value={0} >
                        Episodes (Oldest - Newest)
                      </option>
                      <option value={1} >
                        Episodes (Newest - Oldest)
                      </option>
                      <option value={2}>Season (Newest - Oldest)</option>
                      <option value={3}>Season (Oldest - Newest)</option>
                    </select>
                 
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;

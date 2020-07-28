import React from 'react';

const Banner = ({title, about, genres, rating, image}) => {
  const star = rating ? rating['average'] : '';
  const movieImage = image
    ? image['medium']
    : 'https://res.cloudinary.com/kugoo/image/upload/v1595864255/tests/movielogo.png';
  return (
    <>
      <section className="breadcrumb-area">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content d-flex flex-wrap justify-content-between align-items-center">
                  <div className="section-heading">
                    <h2 className="sec__title mb-0">
                      <i className="las la-film"></i> {title}
                    </h2>
                    <p
                      style={{
                        color: '#fff',
                      }}
                    >
                      {about ? about.replace(/<[^>]*>?/gm, '') : ''}
                    </p>
                    <p
                      style={{
                        color: '#fff',
                      }}
                    >
                      <b>Genre</b>:{' '}
                      {genres
                        ? genres.map((genre) => {
                            return genre + ', ';
                          })
                        : ''}
                    </p>
                    <p
                      style={{
                        color: '#fff',
                      }}
                    >
                      <b>
                        {' '}
                        <i class="las la-star"></i> Rating
                      </b>
                      : {star} / 10
                    </p>
                  </div>
                  <ul className="list-items d-flex align-items-center">
                    <div class="testi-content mb-3">
                      <img
                        src={movieImage}
                        class="testi__img"
                        alt="movie"
                      />
                    </div>{' '}
                    <br />
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

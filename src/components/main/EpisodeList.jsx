import React from 'react';

const EpisodeList = ({episodes}) => {
  let movieEpisodes;
  if (episodes) {
    movieEpisodes = episodes.episodes ? episodes.episodes : episodes;
  }
  return (
    <>
      <div className="row">
        {episodes
          ? movieEpisodes.map((episode) => {
              return (
                <div className="col-lg-4 column-td-6">
                  <div className="job-card">
                    <div className="job-card-content">
                      <div className="card-head d-flex align-items-center">
                        <div className="company-avatar mr-3">
                          <a href={episode.url} className="d-block"></a>
                          <img src={episode.image.medium} />
                        </div>
                        <div className="company-title-box">
                          <h4 className="card-title mb-1">
                            <a href={episode.url}>{episode.name}</a>{' '}
                          </h4>
                          <p className="card-sub">
                            Season {' '}
                            {episode.season}
                          </p>
                        </div>
                      </div>
                      <div className="card-content mt-4 margin-bottom-30px">
                        <h4 className="card-title mb-2"></h4>
                        <p className="card-sub">
                          {episode.summary
                            .substring(0, 200)
                            .replace(/<[^>]*>?/gm, '')}
                        </p>
                      </div>
                      <div className="section-block-2"></div>
                      <div className="card-foot d-flex align-items-center justify-content-between mt-4">
                        <span className="color-text-2 font-size-13">
                          <i className="las la-calendar"></i> Airdate :{' '}
                          {episode.airdate}
                        </span>
                        <span className="color-text-2 font-size-13">
                          <i className="las la-clock"></i> Air time:{' '}
                          {episode.airtime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : ''}
      </div>
    </>
  );
};

export default EpisodeList;

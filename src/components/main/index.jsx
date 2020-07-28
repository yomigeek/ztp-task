import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NavBar from './../shared/NavBar';
import Banner from '../shared/Banner';
import EpisodeList from './EpisodeList';
import {getMovieInfo} from '../../actions/movieAction';
import Loader from '../../assets/images/loader.svg';
import Search from './Search';
import Sort from './Sort';

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieInfo());
  }, [dispatch]);

  const movie = useSelector(({movie}) => movie);
  const loader = useSelector(({loader}) => loader);

  const [searchKeyword, setKeyword] = useState({
    word: '',
    searchMovie: [],
    searchActivity: false,
  });

  const [sort, setSort] = useState({
    episode: [],
    sortActivity: false,
  });

  const onChange = (e) => {
    e.persist();
    setKeyword((searchKeyword) => ({
      ...searchKeyword,
      word: e.target.value,
      searchActivity: true,
    }));
    setTimeout(function () {
      const searchResult = singleMovieInfo._embedded.episodes.filter(
        (movie) =>
          !movie.name
            .toLowerCase()
            .trim()
            .search(searchKeyword.word.toLowerCase().trim())
      );
      setKeyword((searchKeyword) => ({
        ...searchKeyword,
        searchMovie: searchResult,
      }));
    }, 1000);
  };

  let movieEpisodes;
  const {singleMovieInfo} = movie;
  const {searchActivity, searchMovie} = searchKeyword;

  const clearSearch = () => {
    setKeyword((searchKeyword) => ({
      ...searchKeyword,
      word: '',
      searchActivity: false,
      searchMovie: [],
    }));
  };

  const sortEpisodes = (e) => {
    const order = parseInt(e.target.value, 10);

    let sortArray;
    if (e.target.value <= 1) {
      sortArray = singleMovieInfo._embedded.episodes.sort(function (a, b) {
        var keyA = new Date(a.airstamp),
          keyB = new Date(b.airstamp);

        if (order === 1) {
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
        } else {
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        }
      });
    } else if (e.target.value > 1) {
      sortArray = singleMovieInfo._embedded.episodes.sort(function (a, b) {
        var keyA = new Date(a.season),
          keyB = new Date(b.season);

        if (order === 2) {
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
        } else {
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        }
      });
    }

    setSort((sort) => ({
      ...sort,
      movie: sortArray,
      sortActivity: true,
    }));
    clearSearch();
  };

  if (searchActivity && searchMovie.length < 1) {
    movieEpisodes = (
      <div style={{margin: 'auto'}}>No episode met your search criteria.</div>
    );
  } else if (searchActivity && searchMovie.length > 0) {
    movieEpisodes = (
      <EpisodeList
        episodes={
          searchKeyword.searchMovie.length > 0
            ? searchKeyword.searchMovie
            : singleMovieInfo._embedded
        }
      />
    );
  } else if (sort.sortActivity && sort.movie.length > 1) {
    movieEpisodes = (
      <EpisodeList
        episodes={
          searchKeyword.searchMovie.length > 0
            ? searchKeyword.searchMovie
            : singleMovieInfo._embedded
        }
      />
    );
  } else {
    movieEpisodes = <EpisodeList episodes={singleMovieInfo._embedded} />;
  }

  return (
    <>
      <NavBar title="Welcome" icon="" />
      <Banner
        title={singleMovieInfo ? singleMovieInfo.name : ''}
        about={singleMovieInfo.summary}
        genres={singleMovieInfo.genres}
        officialSite={singleMovieInfo.officialSite}
        rating={singleMovieInfo ? singleMovieInfo.rating : ''}
        image={singleMovieInfo.image}
      />
      <section className="card-area padding-top-100px padding-bottom-110px">
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="sec__title">Movie Episodes</h2>
            <p className="sec__desc">View all episodes of this movie</p>
          </div>
          <br />
          <br />
          <div className="row">
            <Search
              onChange={onChange}
              onClear={clearSearch}
              searchActivity={searchActivity}
            />
            <Sort onChange={sortEpisodes} />

            {loader.appLoader ? (
              <div style={{margin: 'auto', textAlign: 'center'}}>
                <br />
                <img src={Loader} alt="loader" height="80px" width="80px" />
              </div>
            ) : (
              movieEpisodes
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

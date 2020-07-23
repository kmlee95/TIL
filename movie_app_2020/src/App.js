import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); //axios로 나온 값의 data의 data의 movies를 찾아서 넣어줌
    this.setState({ movies, isLoading: false }); //movies:movies 다 했을 때 loading을 false
  };
  componentDidMount() {
    this.getMovies();
  }
  //key 값이 필요한 이유는 react는 상태가 바뀌면 바뀐부분만 새로 그리는데.. 반복 컴포넌트인 경우는 key속성에 지정한 값을 기준으로 기존의 컴포넌트인지 판단.
  //css class를 쓰면 맨위 class로 감싼거랑 혼동돼서 에러.. className을 사용하자.
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading..</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;

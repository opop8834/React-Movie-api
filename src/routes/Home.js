import { useState, useEffect } from "react";
import Movie from "../Movie";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {movies.map((item) => (
            <Movie
              id={item.id}
              key={item.id}
              medium_cover_image={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
  // optional operator ?. 로 값이 없으면 error가 아닌 undefined로 만들어 줌
}
export default Home;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Detail.module.css";
function Detail() {
  const { id } = useParams(); // movie/id 에서 id 값을 받을 수 있게 됨
  // {} 사용해서 object가 아닌 진짜 id string값만 받아올 수 있게 됨
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetails(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading </h1>
      ) : (
        <div>
          <img
            src={details.background_image}
            alt={details.title}
            className={styles.movie__img}
          />
          <h1 className={styles.movie}>{details.slug}</h1>
          <h1 className={styles.movie}>{details.date_uploaded}</h1>
          <h1 className={styles.movie}>rating : {details.rating}</h1>
        </div>
      )}
    </div>
  );
}
export default Detail;

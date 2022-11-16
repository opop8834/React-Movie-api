import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Detail() {
  const { id } = useParams(); // movie/id 에서 id 값을 받을 수 있게 됨
  // {} 사용해서 object가 아닌 진짜 id string값만 받아올 수 있게 됨
  const [details, setDetails] = useState("");
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetails(json.data.movie);
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>Info</h1>
      <img src={details.small_cover_image} alt={details.title} />
      <h1>{details.slug}</h1>
      <h1>{details.description_full}</h1>
      <h1>{details.date_uploaded}</h1>
      <h1>{details.rating}</h1>
    </div>
  );
}
export default Detail;

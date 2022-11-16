import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
} // "/" 는 home으로 간다는 뜻
// URL중에서 id값을 가져올 수 있게 Movie 컴포넌트 안에서 useParams 이용해서 지정한 변수 id를 가져올 수 있다.
export default App;

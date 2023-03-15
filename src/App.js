import "./App.css";
import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import NewMovie from "./components/NewMovie";
import Movies from "./components/Movies";
import Upload from "./components/Upload";

function App() {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "comments");
  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setMovieList(filteredData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Auth />
      <NewMovie getMovieList={getMovieList} />
      <Movies movieList={movieList} getMovieList={getMovieList} />
      <Upload />
    </div>
  );
}

export default App;

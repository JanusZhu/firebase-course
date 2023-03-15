import { useState } from "react";
import { db } from "../config/firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
const Movie = ({ movie, movieList, getMovieList }) => {
  const [updatedTitle, setUpdatedTitle] = useState("");

  const deletMovie = async (id) => {
    try {
      const movieDoc = doc(db, "comments", id);
      await deleteDoc(movieDoc);
      getMovieList();
    } catch (error) {
      console.error(error);
    }
  };

  const updateMovieTitle = async (id) => {
    try {
      const movieDoc = doc(db, "comments", id);
      await updateDoc(movieDoc, { title: updatedTitle });
      getMovieList();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
        {movie.title}
      </h1>
      <p>Date: {movie.releaseDate}</p>
      <button
        onClick={() => {
          deletMovie(movie.id);
        }}
      >
        Delete movie
      </button>
      <input
        type="text"
        placeholder="new title..."
        onChange={(e) => {
          setUpdatedTitle(e.target.value);
        }}
      />

      <button
        onClick={() => {
          updateMovieTitle(movie.id);
        }}
      >
        Update Title
      </button>
    </div>
  );
};

export default Movie;

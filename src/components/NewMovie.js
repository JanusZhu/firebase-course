import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { collection } from "firebase/firestore";
const NewMovie = ({ getMovieList }) => {
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieReleaseDate, setNewMovieReleaseDate] = useState("");
  const [newMovieOscar, setNewMovieOscar] = useState(false);
  const moviesCollectionRef = collection(db, "comments");
  const submitNewMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newMovieReleaseDate,
        receivedAnOscar: newMovieOscar,
        creatorId: auth?.currentUser?.uid,
      });
      getMovieList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Movie Title"
        onChange={(e) => {
          setNewMovieTitle(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Movie Release Year"
        onChange={(e) => {
          setNewMovieReleaseDate(Number(e.target.value));
        }}
      />
      <input
        type="checkbox"
        onChange={(e) => {
          setNewMovieOscar(e.target.checked);
        }}
      />
      <label htmlFor="">Received an Oscar</label>
      <button onClick={submitNewMovie}>Submit New Movie</button>
    </div>
  );
};

export default NewMovie;

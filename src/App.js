import {useEffect} from "react";

import './App.css'
import MovieCard from "./MovieCard";
import searchIcon from './search.svg'

//66b435d1

const API_URL = 'http://www.omdbapi.com?apikey=66b435d1'


const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search[0])
  }
  useEffect(()=>{
    searchMovies('superman')
  },[])

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies" value="Superman" />
      </div>
      <div className="container">
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  )
}

export default App;
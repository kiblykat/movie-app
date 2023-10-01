import {useEffect, useState} from "react";

import './App.css'
import MovieCard from "./MovieCard";
import searchIcon from './search.svg'

//66b435d1

const API_URL = 'http://www.omdbapi.com?apikey=66b435d1'


const App = () => {
  const [movies,setMovies] = useState([])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
    console.log(data.Search)
  }
  useEffect(()=>{
    searchMovies('sdasdas')
  },[])


  
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies" value="Superman" />
        <img src={searchIcon}/>
      </div>
      <div className="container">
        {
          movies?.length>0?
          movies.map((movie) =>
          <MovieCard movie1 = {movie} />
          ):<p>no movies avail</p>
        }
      </div>
    </div>
  )
}

export default App;
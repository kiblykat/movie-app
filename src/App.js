import {useEffect, useState} from "react";

import './App.css'
import MovieCard from "./MovieCard";
import searchIcon from './search.svg'

//66b435d1

const API_URL = 'http://www.omdbapi.com?apikey=66b435d1'


const App = () => {
  const [movies,setMovies] = useState([])
  const [search,setSearch] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }
  useEffect(()=>{
    searchMovies('')
  },[])
  
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
          placeholder="Search for movies" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <img 
          src={searchIcon} 
          onClick={() => searchMovies(search)}
        />
      </div>
      <div className="container">
        {
          movies?.length>0?
          movies.map((movie) =>
          <MovieCard movie1 = {movie} />
          ):<h2>no movies avail</h2>
        }
      </div>
    </div>
  )
}

export default App;
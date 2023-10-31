const API_URL = `https://www.omdbapi.com?apikey=3804a750`
import { useEffect, useState } from "react"
import "./App.css"
import SearchIcon from "./Search.svg"
import MovieCard from "./MovieCard"

function App() {
// 3804a750 key
const [searchTerm, setSearchTerm] = useState("");
const [data, setData] = useState();

  useEffect(()=>{
    searchMovies("Batman")
  },[])

  useEffect(()=>{ 
    // console.table(data)
  },[data])

  function searchMovies(search){
    fetch(`${API_URL}&s=${search}`)
      .then(res => res.json())
      .then(res => {
        setData(res.Search)
      }).catch((e)=>{
        console.log(e)
      })
  }

  return (
    <>
      <div className="app">
        <h1 style={{cursor: "pointer"}} onClick={()=>searchMovies("batman")} title="Home">FilmDB</h1>

        <div className="search">  
          <input type="text" placeholder="Search movies" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}></input>
          <img src={SearchIcon} alt="search" onClick={()=> searchMovies(searchTerm)} title="Search"></img>
        </div>

        <div className="container">
         {data ? data?.map(mov => {
             return <MovieCard mov={mov} key={mov?.imdbID}/>
          }) :
          (<div className="empty">
                <h2>No movies found with that name</h2>
            </div>
          )} 
        </div>
      </div>
    </>
  )
}
// TODO-asdasda

export default App

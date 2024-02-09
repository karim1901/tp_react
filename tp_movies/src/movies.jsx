import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';



function Movies() {

  const[infoMovie,setInfoMovie]=useState({
    type: 'movie',
    year:'',
    searchMovie:''
  })

  const [movies, setMovies] = useState([]);


  const handleSearch = async () => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=c2062f5b&s=${infoMovie.searchMovie}&type=${infoMovie.type}&y=${infoMovie.year}`);

    if (response.data.Search) {
      setMovies(response.data.Search);
    }

    console.log(response.data.Search)

   
  };

  const Dispatch = useDispatch()

  const ajouter = (movie)=>{
    Dispatch({type:"ajouter", payload:{...movie,quantity:1}})
  }



  return (
    <div className='app'>

      <form>
        <h1>Movies</h1>
        <input 
          type="text" 
          value={infoMovie.searchMovie} 
          name='searchMovie' 
          onChange={(e) => setInfoMovie({...infoMovie,[e.target.name]:e.target.value})} 
          placeholder='Enter a Movie...'
        />

        <select value={infoMovie.type} name='type' onChange={(e)=>setInfoMovie({...infoMovie,[e.target.name]:e.target.value})}>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>

        <input 
          type="text"  
          value={infoMovie.year} 
          name='year' 
          onChange={(e)=>setInfoMovie({...infoMovie,[e.target.name]:e.target.value})} 
          placeholder='Year'
        />

        <button type='button' onClick={handleSearch}>Search</button>
        <NavLink to='/panier'><button type='button'><ion-icon name="cart-outline"></ion-icon></button></NavLink>

      </form>


      <div className='container'>
        {movies.map((movie,index) => (
          <div className="card" key={index}>
            <div className="img">
              <img src={movie.Poster} alt="" />
            </div>
            <div className="info">
              <p>{movie.Title}</p>
              <p>Type: {movie.Type}</p>
              <p>Year: {movie.Year}</p>
              <button onClick={()=>{ajouter(movie)}}>ajouter +</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

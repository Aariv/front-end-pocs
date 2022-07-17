import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
// e036b284

import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e036b284';

// const movie1 = {
//     "Title" : "Amazing Spider Man",
//     "Year" : "2022",
//     "imdbID" : "rtrtrt343443",
//     "Type" : "movie",
//     "Poster" : "N/A"
// }


const App = () => {

    // New State
    const [movies, setMovies] = useState([]); // empty array

    const [searchTerm, setSearchTerm] = useState('');



    // This is how a function is created
    // async would take time to retreive data
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }

    // Kind of constructor to call when calling the component. 
    useEffect(() => {
        searchMovies('spiderman')
    }, []);

    // JSX syntax 
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
            </div>
            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {/* <MovieCard movie={movies[0]}/> */}
                        {/* <MovieCard movie={movie1}/>
                        <MovieCard movie={movie1}/>
                        <MovieCard movie={movie1}/>
                        <MovieCard movie={movie1}/>
                        <MovieCard movie={movie1}/> */}

                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
            
        </div>
    )
}

// To invoke anywhere in the project
export default App;
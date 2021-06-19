import React,{useState} from 'react';
import MovieInfo from './MovieInfo';

const SearchMovie = () => {
    const [query, setQuery]= useState('')
    const [movies, setMovies] = useState([]);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d97ff566b10a1bf1527e71eeff723291&language=en-US&query=${query}&page=1&include_adult=false`;

    const getMovieResults = async (e)=>{
        console.log("q:", query);
        try {
            e.preventDefault();
            const result = await fetch(url);
            const data = await result.json();
            setMovies(data.results);
            console.log("data", movies);
        } catch (error) {
            console.log("Catched error: "+ error);
        }        
    }

    

    return (
        <div>
        <div id='content' className='section' onSubmit={getMovieResults} >
            <form className='form-control'>
                <label className='form-label'>MOVIE NAME</label>
                <input className='form-input' type="text" name='query' required onChange={(e)=>setQuery(e.target.value)}/>
                <button className='form-button' type='submit' >Search</button>
            </form>
        </div>

        <div className='card-list'>
            {
                movies.filter(movie=>movie.poster_path).map(
                    movie =>
                    <MovieInfo movie={movie} key={movie.id}/>
                )
            }
        </div>
        </div>
    )
}

export default SearchMovie;

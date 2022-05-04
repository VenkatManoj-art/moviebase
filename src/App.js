import { useEffect,useState} from 'react';
import './App.css';
import MovieCards from './MovieCards';
import SearchIcon from './search.svg'

//Calling API call
const API_URL='http://www.omdbapi.com/?apikey=32a737a3';


const App = () =>{
  const [movies, setMovies] = useState([])
  const [searchTerm,setSearchTerm]=useState('');
    const searchMovies = async (title) =>{
      const res=await fetch(`${API_URL}&s=${title}`)
      const data=await res.json();
      setMovies(data.Search);
    }
    useEffect(() =>{
      searchMovies("Thor")
    },[])
  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className='search'>
        <input 
        value={searchTerm}
        placeholder="Search for movies"
        onChange={(e) =>setSearchTerm(e.target.value)}
        />
        <img
         src={SearchIcon}
         alt="search"
         onClick={() =>searchMovies(searchTerm)}
         />
      </div>
    
    {movies?.length >0 ?(
      <div className='container'>
        {movies.map((movie) =>(
            <MovieCards movie={movie} />
            ))}
      </div>
  ):(
    <div className='empty'>
      <h1>No Movies Found</h1>
    </div>
  )}
    
    </div>
  );
};

export default App;

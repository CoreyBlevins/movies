import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Topbar } from './components/topbar';
import { Top20 } from './components/top20';
import { MovieDetail } from './components/movieDetail';
import { Results } from './components/results';

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [movieId, setMovieId] = useState('')

console.log(movieId)
  return (
    <div class={styles.overview}>
      <Topbar search={search} setSearch={setSearch} setData={setData} setMovieId={setMovieId}/>
      <Routes>
        <Route path='/' element={<Top20 setMovieId={setMovieId}/>}/>
        <Route path={`/movie/${movieId}`} element={<MovieDetail movieId={movieId}/>}/>
        <Route path={`/results/${search}`} element={<Results data={data} setMovieId={setMovieId}/>}/>
      </Routes>
    </div>
  );
}

export default App;

const styles = {
  overview: 'bg-neutral-900 min-h-screen pb-4'
}

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Topbar } from './components/topbar';
import { Top20 } from './components/top20';
import { MovieDetail } from './components/movieDetail';
import { Results } from './components/results';

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [movieId, setMovieId] = useState('')

  return (
    <div className={styles.overview}>
      <Topbar search={search} setSearch={setSearch} setData={setData} setMovieId={setMovieId}/>
      <Routes>
        <Route path='/' element={<Top20 setMovieId={setMovieId}/>}/>
        <Route path={`/movie/${movieId}`} element={<MovieDetail movieId={movieId} setMovieId={setMovieId}/>}/>
        <Route path={`/results/${search}`} element={<Results data={data} setMovieId={setMovieId}/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;

const styles = {
  overview: 'bg-gradient-to-br from-zinc-800 to-neutral-900 min-h-screen pb-4'
}

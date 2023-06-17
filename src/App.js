import { Topbar } from './components/topbar';

function App() {

  return (
    <div class={styles.overview}>
      <Topbar/>
    </div>
  );
}

export default App;

const styles = {
  overview: 'bg-neutral-900 min-h-screen'
}

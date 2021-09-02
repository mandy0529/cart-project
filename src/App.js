import {useGlobalContext} from './context';
import Loader from './Loader';
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  const {loading} = useGlobalContext();
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;

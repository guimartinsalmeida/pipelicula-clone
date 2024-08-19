import MoviesHomeContainer from '../components/MoviesHomeContainer';
import Header from '../pages/Header';
function Home() {
  return (
    <div className='bg-gray-900 h-[100vh] w-[100vw] overflow-x-hidden'>
      <Header/>
      <MoviesHomeContainer/>
    </div>
  )
}

export default Home

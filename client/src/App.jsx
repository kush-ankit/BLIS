
import './App.css'

import LibCard from './components/libCard/libCard';
import NavBar from './components/navBar/NavBar';

function App() {
 

  return (
    <>
     <div className="app-container">
       
       <NavBar/>
       
       <div className='cards-container'>
      <LibCard/>
      <LibCard/>
      <LibCard/>
      <LibCard/>
      <LibCard/>
      <LibCard/>
      </div>

      
    </div>
    </>
  )
}

export default App

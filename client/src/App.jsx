
import './App.css'

import LibCard from './components/libCard/libCard';
import NavBar from './components/navBar/NavBar';
import LoginPage from './components/pages/loginPage/LoginPage';
import SignUpPage from './components/pages/loginPage/SignUpPage';


function App() {
 

  return (
    <>
     <div className="app-container">
       
       <NavBar/>
       
       <div className='cards-container'>
        <LoginPage/>
      </div>
       
      
    </div>
    </>
  )
}

export default App

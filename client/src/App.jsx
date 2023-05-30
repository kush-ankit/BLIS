
import './App.css'

import LibCard from './components/libCard/libCard';
import NavBar from './components/navBar/NavBar';
import LoginPage from './components/pages/loginPage/LoginPage';
import SignUpPage from './components/pages/loginPage/SignUpPage';
import TicketQRCode from '../src/components/ticketQrGenerator/TicketQRCode';


function App() {
  return (
    <>
      <form action="http://localhost:3001/user/register/uploadProfilePicture" method="POST" enctype="multipart/form-data">
        <div>
          <label for="name">Image Title</label>
          <input type="text" id="name" placeholder="Name" value="" name="name" required />
        </div>
        <div>
          <label for="desc">Image Description</label>
          <textarea id="desc" name="desc" value="" rows="2" placeholder="Description" required>
          </textarea>
        </div>
        <div>
          <label for="image">Upload Image</label>
          <input type="file" id="image" name="image" value="" required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </>
  )
  
  }
 



export default App

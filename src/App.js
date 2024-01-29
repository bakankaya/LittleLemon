import { Routes,Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import BookingPage from './components/BookingPage.js';
import ConfirmedBooking from './components/BookingConfirmed.js';


function App() {
  return (
    <div className='Main'>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/booking' element={<BookingPage />}/>
        <Route path="/confirmed" element={<ConfirmedBooking/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Routes,Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className='Main'>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

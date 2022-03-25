import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { RoomProvider } from './context_data/Context';
import './App.css';

function App() {
  return (
    <RoomProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/rooms' element={<Rooms />}/>
          <Route path='/rooms/:slug' element={<SingleRoom />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </Router>
    </RoomProvider>
  );
}

export default App;

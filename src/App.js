
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UseStatePage from './pages/UseStatePage';
import Homepage from './pages/Homepage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/usestate' element={<UseStatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

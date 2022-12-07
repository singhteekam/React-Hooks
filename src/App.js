
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UseStatePage from './pages/UseStatePage';
import Homepage from './pages/Homepage'
import Navigation from './pages/Navigation';


function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/usestate' element={<UseStatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

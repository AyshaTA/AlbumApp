import logo from './logo.svg';
import './App.css';
import AllAlbum from './components/AllAlbum';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllAlbum/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        <Route path='/ViewAll' element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

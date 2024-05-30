import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './pages/Home'
import StatementScreen from './pages/statement'
import GalleryScreen from './pages/Gallery'

function App() {
  return (
    <div className="app">
        <BrowserRouter>
        {/* <Header/> */}
          <Routes>
          <Route element={
            <HomeScreen />
            } path="/" />
          <Route path='/statement' element={<StatementScreen />} />
          <Route path='/gallery' element={<GalleryScreen/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

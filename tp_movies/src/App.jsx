import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./movies";
import Panier from "./panier";




function App() {



  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies/>} />
        <Route path='/panier' element={<Panier/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

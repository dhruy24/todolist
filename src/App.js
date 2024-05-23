import {createContext } from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import ListPage from './Pages/ListPage';
import DetailsPage from './Pages/DetailsPage';

const DataProvider = createContext()

function App() {
  return (
    <Routes>
      <Route path='/' element={<ListPage/>} />
      <Route path ='/details' element={<DetailsPage/>} />
    </Routes>
  );
}

export default App;
export {DataProvider}

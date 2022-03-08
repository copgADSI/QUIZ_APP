import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutR from './Routes/LayoutR';
import Home from './Views/Home/Home'
import FilmAndTelevision from './Views/FilmAndTelevision/FilmAndTelevision';
import GeneralCulture from './Views/GeneralCulture/GeneralCulture';
import Science from './Views/Science/Science';
import NotFound from './Views/NotFound/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutR/>} >
        <Route index element={<Home/>} />
        <Route path='filmAndTelevision' element={<FilmAndTelevision/>} />
        <Route path='generalCulture' element={<GeneralCulture/>} />
        <Route path='science' element={<Science/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

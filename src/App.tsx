import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Feed from './Screens/Feed/Feed';
import Banner from './components/Banner/Banner';
import Article from './Screens/Article/Article';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Banner/>}>
          <Route index element={<Home/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/article/:id' element={<Article />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import { useEffect, useState } from 'react';

import '../styling/Homepage.css';
import ArticleList from './ArticleList';
import Filter from './Filter';
import getFetch from '../apiCalls';


const Homepage = ( {displayFilter, setDisplayFilter, displayedArticles, setDisplayedArticles} ) => {

  return (
    <main>
      <header>Top Stories from the NYT</header>
      <Filter setDisplayFilter={setDisplayFilter}/>
      <ArticleList displayedArticles={displayedArticles} displayFilter={displayFilter}/>
    </main>
  )
};

export default Homepage;
import '../styling/App.css';
import ArticleList from './ArticleList';
import Filter from './Filter';
import { useEffect, useState } from 'react';
import getFetch from '../apiCalls';

const App = () => {

  const [displayedArticles, setDisplayedArticles] = useState([]);

  useEffect(() => {
    getFetch('home')
    .then(data => setDisplayedArticles(data.results))
  });

  return (
    <main>
      <header>Top Stories from the NYT</header>
      <Filter/>
      <ArticleList displayedArticles={displayedArticles}/>
    </main>
  );
};

export default App;

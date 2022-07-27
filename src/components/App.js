import '../styling/App.css';
import ArticleList from './ArticleList';
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
      <ArticleList displayedArticles={displayedArticles}/>
    </main>
  );
};

export default App;

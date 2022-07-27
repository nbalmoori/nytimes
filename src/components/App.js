import '../styling/App.css';
import ArticleList from './ArticleList';
import Filter from './Filter';
import { useEffect, useState } from 'react';
import getFetch from '../apiCalls';

const App = () => {

  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [displayFilter, setDisplayFilter] = useState("home");

  useEffect(() => {
    getFetch(displayFilter)
    .then(data => setDisplayedArticles(data.results))
  });

  return (
    <main>
      <header>Top Stories from the NYT</header>
      <Filter setDisplayFilter={setDisplayFilter}/>
      <ArticleList displayedArticles={displayedArticles}/>
    </main>
  );
};

export default App;

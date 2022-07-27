import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './ArticleList';
import Filter from './Filter';
import getFetch from '../apiCalls';
import '../styling/App.css';

const App = () => {

  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [displayFilter, setDisplayFilter] = useState("home");

  useEffect(() => {
    getFetch(displayFilter)
    .then(data => setDisplayedArticles(data.results))
  });

  return (
    <>
    <Route exact path="/" render={() =>
      <main>
        <header>Top Stories from the NYT</header>
        <Filter setDisplayFilter={setDisplayFilter}/>
        <ArticleList displayedArticles={displayedArticles}/>
      </main>}
    />
    <Route exact path="/:title" render={( {match} ) => 
      <section>
        <p>{match.params.title}</p>
      </section>
    }
    />
    </>
  );
};

export default App;

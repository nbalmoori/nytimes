import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ArticleList from './ArticleList';
import ArticleDetails from './ArticleDetails';
import Filter from './Filter';
import Homepage from './Homepage';
import getFetch from '../apiCalls';

import '../styling/App.css';

const App = () => {

  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [displayFilter, setDisplayFilter] = useState("home");

  useEffect(() => {
    getFetch(displayFilter)
    .then(data => setDisplayedArticles(data.results))
  }, [displayFilter]);
 
  return (
    <>
    <Switch>
      <Route exact path="/" render={() => <Homepage displayFilter={displayFilter} setDisplayFilter={setDisplayFilter} displayedArticles={displayedArticles} setDisplayedArticles={setDisplayedArticles}/>}/>
      <Route exact path="/:section/:id" render={( {match} ) => <ArticleDetails id={match.params.id} section={match.params.section} displayedArticles={displayedArticles} /> } />
    </Switch>
    </>
  );
};

export default App;




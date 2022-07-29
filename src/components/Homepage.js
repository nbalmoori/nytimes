import ArticleList from './ArticleList';
import Filter from './Filter';
import '../styling/Homepage.css';

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
import '../styling/ArticleList.css';
import ArticleLink from './ArticleLink';

const ArticleList = ( {displayedArticles} ) => {

  const articlesToDisplay = displayedArticles.map(article => {
    return <ArticleLink articleInfo={article} key={article.uri}/>
  })

  return (
    <section className='articleList'>
      {articlesToDisplay}
    </section>
  )
};

export default ArticleList;
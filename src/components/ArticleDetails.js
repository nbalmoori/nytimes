import '../styling/ArticleDetails.css';
import getFetch from '../apiCalls';
import { useEffect, useState } from 'react';


const ArticleDetails = ( {id, section} ) => {

  const [selectedArticle, setSelectedArticle] = useState({});

  useEffect(() => {
    getFetch(section).then(data => (data.results.find(article => article.uri === `nyt://article/${id}`)))
    .then(data => setSelectedArticle(data))
  }, []);

  const jumboPic = selectedArticle.multimedia?.find(media => media.format === 'Super Jumbo')
  
  return (
    <div className='articleInfo'>
      <h1>{selectedArticle.title}</h1>
      <p>{selectedArticle.byline}</p>
      <p>Published: {selectedArticle.published_date}</p>
      {jumboPic && <><img className='jumboPic' src={jumboPic.url} alt={jumboPic.caption}/> <p>{jumboPic.copyright}</p> <p>{jumboPic.caption}</p> </>}
      <p>{selectedArticle.abstract}</p>
      <p>To view this story on the NYT website, click <a href={selectedArticle.url}>here</a></p>
    </div>
  )
};

export default ArticleDetails;
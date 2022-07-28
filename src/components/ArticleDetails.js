import '../styling/ArticleDetails.css';
import getFetch from '../apiCalls';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';



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
      <p>{selectedArticle.byline}    |    Date Published: {dayjs(selectedArticle.published_date).format('MM-DD-YYYY')}</p>
      {jumboPic && <><img className='jumboPic' src={jumboPic.url} alt={jumboPic.caption}/> <div className='picInfo'><p className='copyright'>Copyright: {jumboPic.copyright}</p> <p className='caption'>{jumboPic.caption}</p></div></>}
      <h2>{selectedArticle.abstract}</h2>
      <p>To view this story on the NYT website, click <a href={selectedArticle.url}>here</a></p>
      <Link to={'/'}><button>Return Home</button></Link>
    </div>
  )
};

export default ArticleDetails;
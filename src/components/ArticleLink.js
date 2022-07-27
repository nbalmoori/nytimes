import { Link } from 'react-router-dom';
import '../styling/ArticleLink.css';

const ArticleLink = ( {articleInfo} ) => {

  const thumbnail = articleInfo.multimedia?.find(media => media.format === 'Large Thumbnail')

  if (!thumbnail) {
    return (
      <Link to={`/${articleInfo.title}`}>
        <div className='articleLink'>
          <p className='articleLinkTitle'>{articleInfo.title}</p>
        </div>
      </Link>
    )
  } else {
    return (
      <Link to={`/${articleInfo.title}`}>
        <div className='articleLink'>
          <img src={thumbnail.url} alt={thumbnail.caption}/>
          <p className='articleLinkTitle'>{articleInfo.title}</p>
        </div>
      </Link>
    )
  }
};

export default ArticleLink;
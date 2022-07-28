import { Link } from 'react-router-dom';
import '../styling/ArticleLink.css';

const ArticleLink = ( {articleInfo, displayFilter} ) => {

  const thumbnail = articleInfo.multimedia?.find(media => media.format === 'Large Thumbnail')
  const id = articleInfo.uri.split('/').slice(-1)

  if (!thumbnail) {
    return (
      <Link to={`${displayFilter}/${id}`}>
        <div className='articleLink'>
          <p className='articleLinkTitle'>{articleInfo.title}</p>
        </div>
      </Link>
    )
  } else {
    return (
      <Link to={`${displayFilter}/${id}`}>
        <div className='articleLink'>
          <img src={thumbnail.url} alt={thumbnail.caption}/>
          <p className='articleLinkTitle'>{articleInfo.title}</p>
        </div>
      </Link>
    )
  }
};

export default ArticleLink;
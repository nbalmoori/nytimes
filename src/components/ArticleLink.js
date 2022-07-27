import '../styling/ArticleLink.css';

const ArticleLink = ( {articleInfo} ) => {

  const thumbnail = articleInfo.multimedia.find(media => media.format === 'Large Thumbnail')

  return (
  <div className='articleLink'>
    <img src={thumbnail.url} alt={thumbnail.caption}/>
    <p className='articleLinkTitle'>{articleInfo.title}</p>
  </div>
)};

export default ArticleLink;
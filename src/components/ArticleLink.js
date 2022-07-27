import '../styling/ArticleLink.css';

const ArticleLink = ( {articleInfo} ) => {

  const thumbnail = articleInfo.multimedia.find(media => media.format === 'Large Thumbnail').url
  console.log(thumbnail)

  return (
  <div className='articleLink'>
    <img src={thumbnail} />
    <p>{articleInfo.title}</p>
  </div>
)};

export default ArticleLink;
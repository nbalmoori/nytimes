import '../styling/Filter.css';

const Filter = ( {setDisplayFilter} ) => {

  const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']
  const options = sections.map(section => {
    return <option value={section} key={section}>{section}</option>
  })

  return (
    <div className="filter">
    <p>Filter by category: </p>
    <select onChange={(e) => setDisplayFilter(e.target.value)}>
      <option value="home" key="home">all</option>
      {options}
    </select>
    </div>
  )
};

export default Filter;
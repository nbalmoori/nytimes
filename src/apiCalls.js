const getFetch = (address) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${address}.json?api-key=bJT1NeTocYTr6osWB9O4AXvY318qfnGt`)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.text);
    } else {
      return response.json();
    }
  })
  .catch((err) => {
    console.log(err);
  })
};

export default getFetch;
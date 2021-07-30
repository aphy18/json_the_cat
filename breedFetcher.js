const request = require('request');


const fetchBreedDescription = (catBreed,callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    console.log(typeof data);
    console.log(data);
    
    if (data.length === 0) {
      callback(`Error couldn't find ${catBreed}`,null);
      return;
    }
    const breed = data[0];
    callback(null,breed.description);

  });
};



module.exports = {
  fetchBreedDescription
};


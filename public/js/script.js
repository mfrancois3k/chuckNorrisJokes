window.onload = function() {
  console.log('script loaded');

  // the following steps should be completed on the /jokes/new page

  // 1. New Joke Button
  // listener for a new joke button
  // when a user clicks the new joke button call a function called 'getJoke'
  // make sure you create a fetch call to GET https://api.chucknorris.io/jokes/random
  // append the joke to the dom
  // after the joke is on the screen, the user should have the option to save the joke to the database or request a new joke

  function getJoke() {
    fetch(' https://api.chucknorris.io/jokes/random')
      .then(res => {
        // resolve the promise
        return res.json();
      })
      .then(data => {
        document.getElementById('displayJokes').innerHTML = data.value;
      })
      .catch(err => console.error('fetch error: ', err));
  }

  document.getElementById('getJoke').addEventListener('click', getJoke);
  // 2. Save Joke Button
  // create a save joke button
  // if the user wants to save a joke to the database by clicking the save joke butto, run a function called saveJoke
  // it should make a POST request to /api/jokes and save the joke to the database.
  // you may need to set up the controller to handle this request.
  // after a successful save, the user should be redirected to the new joke's show page

  function saveJoke() {
    const jokeText = document.getElementById('displayJokes').innerHTML;
    fetch('/api/jokes', {
      method: 'post',
      body: JSON.stringify({ text: jokeText }),
      headers: { 'Content-type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        window.location.replace('/jokes/' + data.id);
      })
      .catch(err => console.error('fetch error: ', err));
  }
  document.getElementById('getJoke').addEventListener('click', saveJoke);
};

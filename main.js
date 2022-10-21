const searchbox = document.querySelector('.searchbox')
const suggestion = document.querySelector('.suggestion')

function loadMovies(movie) {
    axios.request(`http://www.omdbapi.com/?s=${movie}&page=2&apikey=344bc5ab`)
        .then(function (response) {
            console.log(response.data.Search);
        })
        .catch(function (error) {
            console.error(error);
        });
}

searchbox.addEventListener('keyup', () => {
    let movie = searchbox.value
    if (movie.length > 0) {
        loadMovies(movie)
    }
})
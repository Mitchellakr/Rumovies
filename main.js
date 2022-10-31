const searchbox = document.querySelector('.searchbox')
// const suggestion = document.querySelector('.suggestion')
const suggestions = document.querySelector('.suggestions')

function loadMovies(movie) {
    axios.request(`http://www.omdbapi.com/?s=${movie}&page=2&apikey=344bc5ab`)
        .then(function (response) {
            // console.log(response.data.Search);
            if (response.data.Response == 'True') {
                for (let i = 0; i < response.data.Search.length; i++) {
                    let movieListItems = document.createElement('div')
                    console.log(movieListItems)
                    if (response.data.Search[i].Poster == 'N/A') {
                        image = "Assets/Lead-image.png"
                    }
                    else {
                        image = response.data.Search[i].Poster
                    }
                    movieListItems.innerHTML = `
                    <div class="suggestion">
                        <img src="${image}" class="thumbnail" alt="">
                        <div>
                            <h4>${response.data.Search[i].Title}</h4> 
                            <p>${response.data.Search[i].Year}</p>
                        </div>
                    </div>
                    `
                    // suggestions.appendChild(movieListItems)
                    suggestions.prepend(movieListItems)
                }
            }
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
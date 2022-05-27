console.log('Hola GetflixUsers 👨🏽‍💻👨🏽‍💻👨🏽‍💻');

const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    Headers: {
        'Content-Type' : 'application/json:charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    }
});

async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const previewMovies = data.results;

    trendingMoviesPreviewList.innerHTML = '';    
    previewMovies.forEach(previewMovie => {
        

        const previewMovieContainer = document.createElement('div');
        previewMovieContainer.classList.add('movie-container');

        const previewMovieImage = document.createElement('img');
        previewMovieImage.classList.add('movie-img');
        previewMovieImage.setAttribute('alt', previewMovie.title);
        previewMovieImage.setAttribute('src', 'https://image.tmdb.org/t/p/w300' +  previewMovie.poster_path);

        previewMovieContainer.appendChild(previewMovieImage);
        trendingMoviesPreviewList.appendChild(previewMovieContainer);
    });
} 

async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list');
    const categories = data.genres;

    categoriesPreviewList.innerHTML = '';

    categories.forEach(category => {
        

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);
    });
} 





console.log('Hola GetflixUsers 👨🏽‍💻👨🏽‍💻👨🏽‍💻');

async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();

    const previewMovies = data.results;
    previewMovies.forEach(previewMovie => {
        
        const trendingPreviewMovies = document.querySelector('#trendingPreview .trendingPreview-movieList')

        const previewMovieContainer = document.createElement('div');
        previewMovieContainer.classList.add('movie-container');

        const previewMovieImage = document.createElement('img');
        previewMovieImage.classList.add('movie-img');
        previewMovieImage.setAttribute('alt', previewMovie.title);
        previewMovieImage.setAttribute('src', 'https://image.tmdb.org/t/p/w300' +  previewMovie.poster_path);

        previewMovieContainer.appendChild(previewMovieImage);
        trendingPreviewMovies.appendChild(previewMovieContainer);
    });
} 

async function getCategoriesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);
    const data = await res.json();

    const categories = data.genres;
    categories.forEach(category => {
        
        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewCategoriesContainer.appendChild(categoryContainer);
    });
} 

getTrendingMoviesPreview();
getCategoriesPreview();

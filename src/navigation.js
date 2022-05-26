window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({ location });

    if(location.hash.startsWith('#trends')) {
        trendsPage();
    } else if( location.hash.startsWith('#search=')) {
        searchPage();
    } else if( location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    } else if( location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
}


function homePage() {
    console.log('Estas en Home!!!');
    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function trendsPage() {
    console.log('Estas en Trends!!!');
}

function searchPage() {
    console.log('Estas en Search!!!');
}

function movieDetailsPage() {
    console.log('Estas en Movie!!!');
}

function categoriesPage() {
    console.log('Estas en Categories!!!');
}



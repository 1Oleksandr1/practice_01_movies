const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastViewedMovie = prompt('Один из последних просмотренных фильмов?', ''); 
const userRating = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?','');
const d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastViewedMovie] = userRating
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
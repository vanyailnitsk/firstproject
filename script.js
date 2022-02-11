let numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false,
};

let title=prompt("Один из последних просмотренных фильмов?");
let rating=prompt("На сколько оцените его?");
personalMovieDB.movies[title]=rating;

title=prompt("Один из последних просмотренных фильмов?");
rating=prompt("На сколько оцените его?");
personalMovieDB.movies[title]=rating;

console.log(personalMovieDB);
console.log(typeof(Object.keys(personalMovieDB.movies)));


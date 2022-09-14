const movies = require("./data.js");
// console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);
  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });
  return cleanList;
}

// console.log(`1. List of directors of this data is ${getAllDirectors(movies)}`);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// nose porque pero no va
function howManyMovies(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movieItem) =>
      movieItem.director === "Steven Spielberg" &&
      movieItem.genre.includes("Drama")
  );
  return dramaMovies;
}

// console.log(`interaction 2: ${howManyMovies(movies)}`);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scores = moviesArray.map((movie) => movie.score);
  let potato = 0;
  scores.forEach((score) => (potato += score));
  return (potato / moviesArray.length).toFixed(2);
}
// console.log(scoresAverage(movies));

function scoresAverageUsingReduce(moviesArray) {
  const scores = moviesArray.reduce((total, movie) => {
    return (total += movie.score);
  }, 0);
  const accruedMoviesScore = scores / moviesArray.length;
  return accruedMoviesScore.toFixed(2);
}

// console.log(scoresAverageUsingReduce(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesScore = (moviesArray) => {
  const drama = moviesArray.filter((movieDrama) => {
    return movieDrama.genre.includes("Drama");
  });
  const scoress = drama.map((movie) => movie.score);
  let patata = 0;
  scoress.forEach((scores) => (patata += scores));
  return (patata / drama.length).toFixed(2);
};
console.log(`loko average de drama: ${dramaMoviesScore(movies)}`);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYearPablo(moviesArray) {
  const cloneMovieArray = [...moviesArray];
  return cloneMovieArray
    .sort((a, b) => {
      if (a.title < b.title) return -1;
    })
    .sort((a, b) => a.year - b.year);
}
// console.log(orderByYearPablo(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}
console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

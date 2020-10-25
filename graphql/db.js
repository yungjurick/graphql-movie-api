export const movies = [
  {
    id: 0,
    title: 'Some Random Movie 1',
    score: 2
  },
  {
    id: 1,
    title: 'Some Random Movie 2',
    score: 1
  },
  {
    id: 2,
    title: 'Some Random Movie 3',
    score: 4
  },
  {
    id: 3,
    title: 'Some Random Movie 4',
    score: 3
  },
  {
    id: 4,
    title: 'Some Random Movie 5',
    score: 2
  },
  {
    id: 5,
    title: 'Some Random Movie 6',
    score: 1
  },
  {
    id: 6,
    title: 'Some Random Movie 7',
    score: 1
  },
]
export const getMovies = () => movies;

export const getMovieById = id => {
  const filteredMovies = people.filter(person => person.id === id)
  return filteredMovies[0]
}

export const deleteMovieById = id => {
  const filteredMovies = people.filter(person => person.id !== id);
  if (movies.length > filteredMovies.length) {
    movies = filteredMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (title, score) => {
  const newMovie = {
    id: movies.length + 1,
    title,
    score
  }
  movies.push(newMovie);
  return newMovie;
}

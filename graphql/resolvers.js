import { getMovies, getMovieById, deleteMovieById, addMovie } from './db';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovieById(id)
  },
  Mutation: {
    addMovie: (_, { title, score }) => addMovie(title, score)
  }
}

export default resolvers;
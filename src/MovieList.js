import React from 'react'
import { StarwarsMovieBoard } from './styles/elements'
import Movie from './Movie'

export default class MovieList extends React.Component {
  render() {
    const { filteredMovies, movies } = this.props
    return (
      <StarwarsMovieBoard>
        {filteredMovies.length > 0
          ? filteredMovies.map(movie => {
              return (
                <Movie
                  handleState={this.props.handleState}
                  movie={movie}
                  key={movie.fields.created}
                />
              )
            })
          : movies.map(movie => {
              return (
                <Movie
                  handleState={this.props.handleState}
                  movie={movie}
                  key={movie.fields.created}
                />
              )
            })}
      </StarwarsMovieBoard>
    )
  }
}

import React from 'react'
import { StarwarsMovieBoard } from './styles/elements'
import Movie from './Movie'

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props
    return (
      <StarwarsMovieBoard>
        {movies.map(movie => {
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

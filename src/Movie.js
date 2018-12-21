import React from 'react'
import Moment from 'react-moment'
import { MovieDiv } from './styles/elements'
import { Small, Regular } from './styles/typography'

export default class Movie extends React.Component {
  render() {
    const { movie } = this.props
    return (
      <MovieDiv
        key={movie.fields.edited}
        onClick={() => {
          this.props.handleState('selectedMovie', movie)
        }}
      >
        <Small>Episode {movie.fields.episode_id}</Small>
        <Regular>{movie.fields.title}</Regular>
        <Small>
          <Moment format="L">{movie.fields.release_date}</Moment>
        </Small>
      </MovieDiv>
    )
  }
}

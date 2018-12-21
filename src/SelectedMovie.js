import React from 'react'
import { Regular, Bold } from './styles/typography'

export default function SelectedMovie(props) {
  const { title, opening_crawl, director } = props.movie.fields
  return (
    <React.Fragment>
      <Bold>{title}</Bold>
      <br />
      <Regular>{opening_crawl}</Regular>
      <br />
      <br />
      <Bold> Director: </Bold>
      <Regular>{director}</Regular>
    </React.Fragment>
  )
}

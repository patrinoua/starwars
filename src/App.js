import React, { Component } from 'react'
import axios from 'axios'

import { Regular } from './styles/typography'
import {
  AppContainer,
  SearchBar,
  SearchContainer,
  SearchBarContainer,
  StarwarsImage,
  StarwarsMovieBoard,
  SelectedMovieContainer,
  MovieDiv,
  StyledSelect,
  LogoContainer,
  Logo,
  Footer
} from './styles/elements'
import { customSelectStyles, selectOptions } from './styles/configSelect'
import MovieList from './MovieList'
import SelectedMovie from './SelectedMovie'

class App extends Component {
  state = {
    value: '',
    movies: [],
    selectedMovie: '',
    selectedSortOption: '',
    filteredMovies: [],
    sortedMovies: []
  }
  componentDidMount = () => {
    axios.get('https://star-wars-api.herokuapp.com/films').then(res => {
      this.setState({
        movies: res.data
      })
    })
  }
  handleChange = event => {
    const { movies } = this.state
    if (event.target.value.length > 0) {
      let filteredMovies = movies.filter(movie => {
        return (
          movie.fields.title
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          movie.fields.release_date.includes(event.target.value)
        )
      })
      this.setState({
        filteredMovies: filteredMovies
      })
    } else {
      this.setState({
        selectedMovie: '',
        filteredMovies: this.state.movies
      })
    }
  }
  handleSortChange = selectedSortOption => {
    this.setState({ selectedSortOption })
    this.sortMovieArray(selectedSortOption.value)
  }
  handleState = (state, data) => {
    if (state === 'selectedMovie') {
      this.setState({
        selectedMovie: data
      })
    }
  }
  sortMovieArray = sortType => {
    const { movies, filteredMovies } = this.state
    let sortedArray = filteredMovies || movies
    if (sortType === 'episode') {
      sortedArray = filteredMovies || movies
      sortedArray.sort((a, b) => {
        return a.fields.episode_id - b.fields.episode_id
      })
    } else if (sortType === 'year') {
      sortedArray.sort((a, b) => {
        return (
          a.fields.release_date.slice(0, 4) - b.fields.release_date.slice(0, 4)
        )
      })
    }
    this.setState({
      filteredMovies: sortedArray
    })
  }

  render() {
    const { movies, filteredMovies } = this.state
    let moviesExist = movies.length > 0
    return (
      <AppContainer>
        <SearchContainer>
          <SearchBarContainer>
            <SearchBar
              id="searchbar"
              type="text"
              name="search"
              placeholder="Search by Episode Name or Year"
              onChange={this.handleChange}
            />
            <StyledSelect
              placeholder={'Sort by year or episode'}
              onChange={this.handleSortChange}
              options={selectOptions}
              styles={customSelectStyles}
            />
          </SearchBarContainer>
          {moviesExist ? (
            <MovieList
              filteredMovies={filteredMovies}
              movies={movies}
              handleState={this.handleState}
            />
          ) : (
            <StarwarsMovieBoard>
              <MovieDiv>Loading movies...</MovieDiv>
            </StarwarsMovieBoard>
          )}
          <SelectedMovieContainer>
            {this.state.selectedMovie.fields ? (
              <SelectedMovie movie={this.state.selectedMovie} />
            ) : this.state.filteredMovies[0] ? (
              <SelectedMovie movie={this.state.filteredMovies[0]} />
            ) : (
              <Regular>No movie selected</Regular>
            )}
          </SelectedMovieContainer>
        </SearchContainer>
        <StarwarsImage />
        <LogoContainer>
          <Logo />
          <Footer>
            Web Design & Development –
            <a
              href="http://angeliki.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angeliki Patrinou
            </a>
          </Footer>
        </LogoContainer>
      </AppContainer>
    )
  }
}

export default App

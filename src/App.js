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
  Logo,
  LogoContainer
} from './styles/elements'
import MovieList from './MovieList'
import SelectedMovie from './SelectedMovie'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      movies: [],
      selectedMovie: '',
      selectedSortOption: '',
      filteredMovies: [],
      sortedMovies: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSortChange = this.handleSortChange.bind(this)
    this.handleState = this.handleState.bind(this)
    this.sortMovieArray = this.sortMovieArray.bind(this)
  }
  componentDidMount() {
    axios.get('https://star-wars-api.herokuapp.com/films').then(res => {
      this.setState({
        movies: res.data
      })
    })
  }
  handleChange(event) {
    const { movies } = this.state
    if (event.target.value.length > 0) {
      let filteredMovies = movies.filter(movie => {
        return (
          movie.fields.title.includes(event.target.value) ||
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
  handleSortChange(selectedSortOption) {
    this.setState({ selectedSortOption })
    this.sortMovieArray(selectedSortOption.value)
  }
  handleState(state, data) {
    if (state === 'selectedMovie') {
      this.setState({
        selectedMovie: data
      })
    }
  }
  sortMovieArray(sortType) {
    const { movies } = this.state
    let sortedArray = movies
    if (sortType === 'episode') {
      sortedArray = movies
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

    const options = [
      { value: 'year', label: 'Sort by Year' },
      { value: 'episode', label: 'Sort by Episode' }
    ]

    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'blue' : 'black',
        backgroundColor: 'none'
      }),
      container: (provided, state) => ({
        ...provided,
        color: '#fee233'
      }),
      menu: (provided, state) => ({
        ...provided,
        background: '#fee233',
        borderRadius: '0px',
        fontWeight: '600'
      }),
      multiValueRemove: (provided, state) => ({
        ...provided,
        background: 'purple'
      }),
      control: () => ({
        display: 'flex'
      }),
      indicatorSeparator: provided => ({
        ...provided,
        backgroundColor: '#fee233'
      }),
      dropdownIndicator: provided => ({
        ...provided,
        color: '#fee233'
      }),
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1
        const transition = 'opacity 300ms'
        const color = '#fee233'
        const fontWeight = '600'
        return {
          ...provided,
          opacity,
          color,
          fontWeight,
          transition
        }
      },
      placeholder: () => ({
        color: '#fee233',
        fontWeight: '600'
      })
    }
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
              options={options}
              styles={customStyles}
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
        </LogoContainer>
      </AppContainer>
    )
  }
}

export default App

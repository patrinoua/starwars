import styled from 'styled-components'
import Select from 'react-select'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchContainer = styled.div`
  z-index: 1;
`

export const SearchBarContainer = styled.div`
  padding: 20px 0px 10px 0px;
  display: flex;
  color: #fee233;
  justify-content: space-between;
  align-items: center;
`

export const StyledSelect = styled(Select)`
  width: 25%;
  padding-left: 10px;
  display: inline-block;
  color: MovieDiv black;
  font-size: 12px;
`

export const SearchBar = styled.input`
  width: 40%;
  padding: 10px;
  z-index: 10;
`
export const SearchButton = styled.button`
  background-color: #fee233;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
  width: 23%;
  &:hover {
    cursor: pointer;
    transform: translateY(1px);
  }
`

export const StarwarsMovieBoard = styled.div`
  width: 500px;
  margin-bottom: 20px;
  background: white;
  overflow: scroll;
  background: black;
  color: #fee233;
  opacity: 0.9;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const SelectedMovieContainer = styled.div`
  width: 480px;
  padding: 10px;
  overflow: scroll;
  min-height: 70px;
  background: black;
  color: #fee233;
  opacity: 0.9;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const MovieDiv = styled.div`
  font-weight: 600;
  font-size: 0.9em;
  padding: 10px;
  :hover {
    cursor: pointer;
    background: blue;
  }
  display: grid;
  grid-template-columns: 20% 65% 15%;
  text-decoration: none;
`
export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
export const Logo = styled.div`
  padding-bottom: 5%;
  width: 60%;
  min-width: 500px;
  height: 40%;
  background-image: url(Logo.svg.png);
  background-size: contain;
  background-repeat: no-repeat;
`
export const StarwarsImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: -1;
  background-image: url(starwarsImg.jpg);
  background-size: cover;
`

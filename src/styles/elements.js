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
  padding-top: 6px;
  border-radius-top: 4px 4px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
`

export const StyledSelect = styled(Select)`
  width: 40%;
  font-size: 13px;
  margin: 5px;
`

export const SearchBar = styled.input`
  width: 52%;
  margin: 5px;
  padding: 10px;
  z-index: 10;
  border: 3px solid #fee233;
  background: black;
  color: #fee233;
  font-size: 13px;
  font-weight: 700;
  &::-webkit-input-placeholder {
    color: #fee233;
  }
  &:focus {
    outline: none;
  }
`

export const StarwarsMovieBoard = styled.div`
  width: 600px;
  margin-bottom: 10px;
  min-height: 50px;
  background: white;
  overflow: scroll;
  background: black;
  color: #fee233;
  opacity: 0.9;
  ::-webkit-scrollbar {
    display: none;
  }
  & div:last-child {
    margin-bottom: 5px;
  }
`
export const SelectedMovieContainer = styled.div`
  width: 580px;
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
  padding: 6px 10px;
  :hover {
    cursor: pointer;
    background: blue;
  }
  display: grid;
  grid-template-columns: 25% 62% 12%;
  align-items: center;
  text-decoration: none;
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

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
export const Logo = styled.div`
  margin-top: 6%;
  width: 70%;
  min-height: 500px;
  background-image: url(Logo.svg.png);
  background-size: contain;
  background-repeat: no-repeat;
`

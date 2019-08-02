import styled from 'styled-components'

export const Small = styled.a`
  font-size: 13px;
  font-weight: 500;
  @media (max-width: 700px) {
    font-size: 0.8em;
  }
`
export const Regular = styled.a`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  @media (max-width: 700px) {
    font-size: 0.9em;
  }
`
export const Bold = styled.a`
  font-size: 18px;
  font-weight: 800;
  padding: 5px 0;
  margin-bottom: 5px;
  @media (max-width: 700px) {
    font-size: 1em;
  }
`

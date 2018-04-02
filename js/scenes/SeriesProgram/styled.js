import styled from 'styled-components'

const SeriesProgramWrapper = styled.div`
margin-top: 1vw;

a {
  float: right;
  text-decoration: none;
  color: black;
  margin-right: 5vw;
}

a p {
  font-weight: bold;
  font-size: 1.1vw;
  transition: 0.8s;
}

a p:hover {
  color: coral;
  transition: 0.4s;
}

h3 {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: lighter;
  display: inline;
  color: white;
  background-color: black;
  padding: 2px;
}

h4 {
  text-transform: uppercase;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1vw;
}
`
export default SeriesProgramWrapper

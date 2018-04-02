import styled from 'styled-components'

const DialoguesFoundationsWrapper = styled.div`
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

 ul {
  display: flex;
  list-style: none;
  padding-left: 0;
}

 ul li {
  margin-right: 2vw;
  cursor: pointer;
}

 ul li:hover {
  color: coral;
}
`

export default DialoguesFoundationsWrapper

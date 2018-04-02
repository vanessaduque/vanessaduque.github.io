import styled from 'styled-components';

const CardWrapper = styled.div`
  display: inline;
  float: left;
  padding: 1px;

img {
  height: 25vw;
}

h5 {
  font-size: 0.8vw;
  font-weight: lighter;
  color: #192aa3;
  margin: 0;
  max-width: 70%;

  &:hover {
    color: coral;
    cursor: pointer;
  }
}

p {
  margin-bottom: 2vw;
  padding-right: 20%;
}
`
export default CardWrapper

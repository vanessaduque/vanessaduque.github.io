import styled from 'styled-components'

export const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 14rem;
    flex: 1;
`

export const Navbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin-right: 1.55vw;
    width: 100%;

    a {
      text-decoration: none;
      color: black;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      padding: 0;
      max-width: 100%;
    }
`

export const NavbarWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const Title =  styled.div`
    max-width: 28%;
    font-size: 1.2vw;
    line-height: 4vw;

    & a {
      text-decoration: underline;
      color: black;
    }

    & h1 {
      margin: 1% 0;
    }
`

export const Subtitle = styled.li`
    margin: -1vh 12vw -0.2vh 0;
    padding-right: 8.5vw;
    padding-top: ${ props => props.firstOfColumn ? '0.1vh' : '0' };
    margin-top: ${ props => props.firstOfColumn ? '0rem' : '-0.3rem'};
    border-top: ${ props => props.firstOfColumn ? 'solid 0.2rem black' : 'none'};

    h2 {
      font-size: 1.15rem;
      line-height: 1rem;
      transition: 0.8s;

      &:hover {
        transition: 0.4s;
        color: coral;
      }

      &::after {
        content: ",";
      }
    }
`

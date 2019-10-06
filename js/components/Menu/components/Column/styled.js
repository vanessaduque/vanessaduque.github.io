/* eslint-disable */
import styled from 'styled-components'

export const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 2.2rem);
  grid-auto-flow: column;
  column-gap: 3rem;
  width: 100%;
`

export const Subtitle = styled.span`
    margin-top: 0rem;
    display: flex;
    align-items: flex-end;

    h2 {
      font-size: 1.15rem;
      line-height: 1rem;
      transition: 0.8s;
      margin: 0;

      &:hover {
        transition: 0.4s;
        color: coral;
      }

      &::after {
        content: ",";
      }
    }

    &:nth-child(5n-4) {
      border-top: solid 0.2rem black;
      padding-top: 2.5vh;
    }

    &:nth-child(5n-1) {
      border-top: solid 0.2rem black;
      padding-top: 2.5vh;
    }
`


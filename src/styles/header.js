import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from './layout'

export default {
  main: styled.header`
    display: block;
    margin: 0;
    padding: 2.5rem 0;
    position: relative;
    border-bottom: 1px solid #fef0f0;
    &::before {
      content: '';
      display: block;
      background: #000;
      position: absolute;
      height: 5px;
      top: 0;
      left: 0;
      right: 0;
    }
    @media (min-width: 420px) {
      padding: 4rem 0;
    }
  `,

  inner: styled(Layout.container)`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 420px) {
      justify-content: flex-start;
    }
  `,

  brandStyles: css`
    color: #4a4a4a;
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.1;
    text-align: center;
    text-decoration: none;
    @media (min-width: 480px) {
      line-height: 1.4;
      font-size: 1.2rem;
      text-align: left;
    }
  `,

  desc: styled.small`
    display: block;
    font-size: 60%;
    font-style: italic;
    font-weight: 400;
    opacity: 0.6;
    position: relative;
    @media (min-width: 420px) {
      font-size: 70%;
      display: inline-block;
    }
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 70%;
      left: -0.1px;
      right: -0.1px;
      bottom: 0;
      transition: top 0.1s ease-in-out;
      background-color: rgba(255, 250, 150, 0.8);
    }
  `,
}
import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.base};
  background: ${color.lightest};
  color: ${color.darkest};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  /* main {
    height: 100vh;
    width: 100vw;
    position: relative;
  } */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: bold;
  }

  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.base - 1}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;

    color: ${color.secondary};
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    color: ${color.black};
    border-radius: 3px;
    margin: 1rem 0;
  }

  a {
    color: ${color.black};
  }

  p {
    font-size: ${typography.size.base};
    line-height: 1.5;
    margin-top: 0;
  }

  ul {
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom, .swiper-pagination-fraction {
    top: 1rem;
  }

  .swiper-pagination-bullet {
    height: 1rem;
    opacity: .5;
    width: 1rem;
  }

  .swiper-pagination-bullet-active {
    background: black;
    opacity: 1;
  }

  .btn {
    background: transparent;
    border: 0.2rem solid #000;
    border-radius: 5rem;
    bottom: 1rem;
    padding: 1rem 2rem;
    position: absolute;
    right: 0;
    text-transform: uppercase;
    z-index: 11;

    &.btn-prev {
      right: 9rem;
    }

    &.btn-next {
      background: black;
      color: white;
    }
  }

  .content-block {
    width: 50%;
  }
  .image-block {
    width: 40%;
  }

  .ImageLeftLockup {
    .content-block {
      order: 2
    }
    .image-block {
      order: 1;
    }
  }

  .theme{
    &--0 {
      background-color: #ECCC24;
    }

    &--1 {
      background-color: #C4EC90;
    }

    &--2 {
      background-color: #C4EC90;
    }

    &--3 {
      background-color: #C4EC90;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    ${bodyStyles}

    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

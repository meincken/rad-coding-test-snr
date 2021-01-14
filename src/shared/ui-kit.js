import React from "react";
import styled from "styled-components";

const NavBlock = styled.header`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  z-index: 21;

  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 2rem 1rem;
    position: relative;

    &:hover {
      span {
        display: block;
        opacity: 100%;
      }
    }
  }
`;

export const Nav = ({ children }) => (
  <NavBlock className="swiper-pagination">
    {children}
  </NavBlock>
);

const ArticleBlock = styled.article`
  background-color: #fff;
  height: 100vh;
  width: 100vw;
`;

const SectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 117rem;
  height: 100vh;
  margin: 0 auto;
  padding: 10rem 1rem;
  flex-flow: column;
  position: relative;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;

export const Section = ({ children, className }) => (
  <ArticleBlock className={className}>
    <SectionDiv>
      {children}
    </SectionDiv>
  </ArticleBlock>
);

const Header2 = styled.h2`
  font-size: 5.7rem;
  line-height: 110%;
`;

export const H2 = ({ title }) => (<Header2>{title}</Header2>);

const Paragraph = styled.p`
  font-size: 3.6rem;
  line-height: 120%;
`;

export const P = ({ content }) => (
  <Paragraph>
    {content}
  </Paragraph>
);

const Pagi = styled.nav`
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 0;

  .btn {
    background: transparent;
    border: 2px solid black;
    border-radius: 5rem;
    font-size: 2.4rem;
    font-weight: bold;
    margin-right: 1.5rem;
    padding: 1rem 2rem;
    text-decoration: none;
    text-transform: uppercase;

    &:last-child {
      margin-right: 0;
    }
  }

  .btn-prev {

  }

  .btn-next {
    background-color: black;
    color: white;
  }
`;

export const Paginate = ({ prevLink, nextLink }) => (
  <Pagi className="slide-nav">
    <button className="btn btn-prev" title={prevLink}>Back</button>
    <button className="btn btn-next" title={nextLink}>Next</button>
  </Pagi>
);

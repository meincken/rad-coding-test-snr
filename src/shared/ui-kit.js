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

export const Nav = ({ children }) => <NavBlock className="swiper-pagination">{children}</NavBlock>;

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
  margin: 0 auto;
  padding: 5rem 0;
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

export const P = ({ content }) => (<Paragraph>{content}</Paragraph>);

const Pagi = styled.nav`
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 0;

  a {
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

  .prev {

  }

  .next {
    background-color: black;
    color: white;
  }
`;

export const Paginate = ({ prevLink, nextLink }) => (
  <Pagi>
    <a className="prev" href="{prevLink}">Back</a>
    <a className="next" href="{nextLink}">Next</a>
  </Pagi>
);

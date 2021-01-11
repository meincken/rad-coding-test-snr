import React from "react"
import styled from "styled-components";
import Data from "../../data/mock-api.json"

const data = Data.content.footer
const legal = data.legal
const privacy = data.privacy
const cookies = data.cookies

const Foot = styled.footer`
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 117rem 1fr;
  position: absolute;
  width: 100vw;
  z-index: 1;

  nav {
    grid-column: 2;
    margin-bottom: 1rem;
  }

  a {
    padding-right: 1.4rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const Footer = () => (
  <Foot>
    <nav>
      <a href={legal.url}>
        {legal.label}
      </a>
      <a href={privacy.url}>
        {privacy.label}
      </a>
      <a href={cookies.url}>
        {cookies.label}
      </a>
    </nav>
  </Foot>
)

export default Footer

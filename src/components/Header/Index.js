import React from "react"
import { NavItem, Nav } from "../../shared/ui-kit"
import Data from "../../data/mock-api.json"

const data = Data.content.pagination

const Header = () => (
  <Nav>
    <NavItem link={data.titles[0].replace(/\s+/g, '-').toLowerCase()} title={data.titles[0]} />
    <NavItem link={data.titles[1].replace(/\s+/g, '-').toLowerCase()} title={data.titles[1]} />
    <NavItem link={data.titles[2].replace(/\s+/g, '-').toLowerCase()} title={data.titles[2]} />
    <NavItem link={data.titles[3].replace(/\s+/g, '-').toLowerCase()} title={data.titles[3]} />
    <NavItem link={data.titles[4].replace(/\s+/g, '-').toLowerCase()} title={data.titles[4]} />
  </Nav>
)

export default Header

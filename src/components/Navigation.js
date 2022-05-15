import React, { useState } from 'react';
import { Navbar, Container, Form } from 'react-bootstrap';
import { CgSearchLoading } from 'react-icons/cg';
export default function Navigation() {
  const [cityToSearch, updateCityToSearch] = useState("");
  const updateSearchValue = (event) => {
    updateCityToSearch(() => event.target.value)
    console.log(cityToSearch);
  }
  const searchCity = () => {
    console.log(cityToSearch);
  }
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
        <input type="text"
          placeholder="Search your city"
          onChange={updateSearchValue}
          value={cityToSearch} />
        <CgSearchLoading
          style={{ "transform": "translateX(-110%)" }}
          onClick={searchCity} />
      </Container>
    </Navbar>
  )
}
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Container, Form } from 'react-bootstrap';
import { CgSearchLoading } from 'react-icons/cg';
import { searchAndAddCity } from '../Redux/components/navigation/navigation'
import { useNavigate } from 'react-router-dom';
export default function Navigation() {
  const [cityToSearch, updateCityToSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateSearchValue = (event) => {
    updateCityToSearch(() => event.target.value)
  }
  const searchCity = () => {
    console.log(cityToSearch);
    dispatch(searchAndAddCity(cityToSearch, navigate));
  }
  return (
    <div id="navigation">
      <Container>
        <input type="text"
          placeholder="Search your city"
          onChange={updateSearchValue}
          value={cityToSearch} />
        <CgSearchLoading
          style={{ "transform": "translateX(-110%)" }}
          onClick={searchCity} />
      </Container>
    </div>
  )
}
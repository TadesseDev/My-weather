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
        <form id="filter">
          <label for="category">Category</label>
          <select name="category" id="category">
            <option value="All">All</option>
            <option value="My cities">My cities</option>
            <option value="Near by cities">Near by cities</option>
            <option value="Major cities">Major cities</option>
          </select>
        </form>
        <div id="search">
          <input type="text"
            placeholder="Search your city"
            onChange={updateSearchValue}
            value={cityToSearch} />
          <CgSearchLoading
            style={{ "transform": "translateX(-110%)" }}
            onClick={searchCity} />
        </div>
      </Container>
    </div>
  )
}
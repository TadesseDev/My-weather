import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { CgSearchLoading } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { searchAndAddCity, applyFilter } from '../Redux/components/navigation/navigation';
import './navigation.scss';

export default function Navigation() {
  const [cityToSearch, updateCityToSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateSearchValue = (event) => {
    updateCityToSearch(() => event.target.value);
  };
  const searchCity = () => {
    dispatch(searchAndAddCity(cityToSearch, navigate));
    updateCityToSearch(() => '');
  };
  const filter = (event) => {
    dispatch(applyFilter(event.target.value, navigate));
  };
  return (
    <div id="navigation">
      <Container>
        <div id="filter">
          <select
            name="category"
            id="category"
            onChange={filter}
          >
            <option value="All">All</option>
            <option value="My cities">My cities</option>
            <option value="Near by cities">Near by cities</option>
            <option value="Major cities">Major cities</option>
          </select>
        </div>
        <div id="search">
          <input
            type="text"
            placeholder="Search your city"
            onChange={updateSearchValue}
            value={cityToSearch}
          />
          <CgSearchLoading
            title="search icon"
            className="searchIcon"
            onClick={searchCity}
          />
        </div>
      </Container>
    </div>
  );
}

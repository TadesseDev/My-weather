import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Weather from './Weather';

function FilteredCities({ filter, cities }) {
  let filterValue = '';
  if (filter === 'My cities') filterValue = 0;
  else if (filter === 'Near by cities') filterValue = 1;
  else filterValue = 2;
  let noMatchFound = true;
  return (
    <Container>
      <h3>{filter}</h3>
      <Row>
        {cities.map((city) => {
          if (city.nearMe === filterValue) {
            noMatchFound = false;
            return <Weather key={city.id} city={city} />;
          }
          return null;
        })}
      </Row>
      {noMatchFound && <p>Sorry, we could not found match for this category</p>}
    </Container>
  );
}
FilteredCities.propTypes = {
  filter: PropTypes.func.isRequired,
  cities: PropTypes.func.isRequired,
};

export default FilteredCities;

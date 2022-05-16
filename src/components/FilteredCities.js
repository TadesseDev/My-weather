import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Weather from './Weather'
export default function FilteredCities({ filter, cities }) {
  const filterValue = filter === "My cities" ? 0 :
    filter === "Near by cities" ? 1 : 2;
  let noMatchFound = true;
  return (
    <Container>
      <h3>{filter}</h3>
      <Row >
        {cities.map(city => {
          if (city.nearMe === filterValue) {
            noMatchFound = false;
            return <Weather key={city.id} city={city} />
          }
        })}
      </Row>
      {noMatchFound && <p>Sorry, we could not found match for this category</p>}
    </Container>
  )
}

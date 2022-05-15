import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Weather from '../components/Weather';
export default function Home() {
  const cities = useSelector(store => store.cities);
  const cityNearMe = cities.filter(city => city.nearMe);
  const otherCities = cities.filter(city => !city.nearMe);
  return (
    <Container>
      <h3>Cities near you</h3>
      <Row >
        {cityNearMe.length > 0 && cityNearMe.map(city => <Weather key={city.id} city={city} />) || <p>We couldn't find your location</p>}
      </Row>
      <hr />
      <h3>Other cities</h3>
      <Row >
        {otherCities.length > 0 && otherCities.map(city => <Weather key={city.id} city={city} />) || <p>You haven't checked other cities</p>}
      </Row>
    </Container>
  )
}

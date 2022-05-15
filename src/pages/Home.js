import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Weather from '../components/Weather';
export default function Home() {

  const cities = useSelector(store => store.cities);
  console.log(cities);
  return (
    <Container>
      <Row >
        {cities.map(city => <Weather key={city.id} city={city} />)}
      </Row>
    </Container>
  )
}

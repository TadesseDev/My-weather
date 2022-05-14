import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Weather from '../components/Weather';
export default function Home() {

  const cities = useSelector(store => store.cities);
  return (
    <Container>
      {cities.map(city => <Weather key={city.id} city={city} />)}
    </Container>
  )
}
